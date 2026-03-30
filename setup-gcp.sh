#!/bin/bash
set -e

# ============================================================
# GCP Setup for GitHub Actions CI/CD
# Run this once to configure everything needed for auto-deploy
# ============================================================

# --- Configuration (edit these) ---
PROJECT_ID=$(gcloud config get-value project)
REGION="us-central1"
REPO_NAME="friends-of-400"
SERVICE_ACCOUNT_NAME="github-deploy"
GITHUB_REPO="kevman123/friends-of-400"
# ----------------------------------

echo "Using GCP project: $PROJECT_ID"
echo "Region: $REGION"
echo "GitHub repo: $GITHUB_REPO"
echo ""

# 1. Enable required APIs
echo "==> Enabling APIs..."
gcloud services enable \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  appengine.googleapis.com \
  secretmanager.googleapis.com \
  iamcredentials.googleapis.com \
  iam.googleapis.com

# 2. Create Artifact Registry repository
echo "==> Creating Artifact Registry repo..."
gcloud artifacts repositories create "$REPO_NAME" \
  --repository-format=docker \
  --location="$REGION" \
  --description="Friends of 400 container images" \
  2>/dev/null || echo "  (repo already exists)"

# 3. Create service account for GitHub Actions
echo "==> Creating service account..."
gcloud iam service-accounts create "$SERVICE_ACCOUNT_NAME" \
  --display-name="GitHub Actions Deploy" \
  2>/dev/null || echo "  (service account already exists)"

SA_EMAIL="${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
echo "  Service account: $SA_EMAIL"

# 4. Grant roles to the service account
echo "==> Granting IAM roles..."
ROLES=(
  "roles/run.admin"
  "roles/artifactregistry.writer"
  "roles/appengine.deployer"
  "roles/appengine.serviceAdmin"
  "roles/iam.serviceAccountUser"
  "roles/secretmanager.secretAccessor"
  "roles/storage.admin"
  "roles/cloudbuild.builds.builder"
)
for ROLE in "${ROLES[@]}"; do
  gcloud projects add-iam-policy-binding "$PROJECT_ID" \
    --member="serviceAccount:$SA_EMAIL" \
    --role="$ROLE" \
    --quiet > /dev/null
  echo "  Granted $ROLE"
done

# 5. Set up Workload Identity Federation (keyless auth from GitHub)
echo "==> Setting up Workload Identity Federation..."

POOL_NAME="github-pool"
PROVIDER_NAME="github-provider"

# Create workload identity pool
gcloud iam workload-identity-pools create "$POOL_NAME" \
  --location="global" \
  --display-name="GitHub Actions Pool" \
  2>/dev/null || echo "  (pool already exists)"

# Create OIDC provider for GitHub
gcloud iam workload-identity-pools providers create-oidc "$PROVIDER_NAME" \
  --location="global" \
  --workload-identity-pool="$POOL_NAME" \
  --display-name="GitHub Provider" \
  --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository" \
  --issuer-uri="https://token.actions.githubusercontent.com" \
  2>/dev/null || echo "  (provider already exists)"

# Get the full provider resource name
WORKLOAD_IDENTITY_PROVIDER=$(gcloud iam workload-identity-pools providers describe "$PROVIDER_NAME" \
  --location="global" \
  --workload-identity-pool="$POOL_NAME" \
  --format="value(name)")

# Allow GitHub repo to impersonate the service account
gcloud iam service-accounts add-iam-policy-binding "$SA_EMAIL" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/$(gcloud iam workload-identity-pools describe $POOL_NAME --location=global --format='value(name)')/attribute.repository/$GITHUB_REPO" \
  --quiet > /dev/null

echo "  Provider: $WORKLOAD_IDENTITY_PROVIDER"

# 6. Create secrets in Secret Manager for Google OAuth
echo "==> Setting up Secret Manager secrets..."

echo -n "Enter your Google OAuth Client ID: "
read GOOGLE_CLIENT_ID
echo -n "Enter your Google OAuth Client Secret: "
read -s GOOGLE_CLIENT_SECRET
echo ""

# Create or update client ID secret
echo -n "$GOOGLE_CLIENT_ID" | gcloud secrets create google-client-id \
  --data-file=- \
  2>/dev/null || \
echo -n "$GOOGLE_CLIENT_ID" | gcloud secrets versions add google-client-id --data-file=-

# Create or update client secret
echo -n "$GOOGLE_CLIENT_SECRET" | gcloud secrets create google-client-secret \
  --data-file=- \
  2>/dev/null || \
echo -n "$GOOGLE_CLIENT_SECRET" | gcloud secrets versions add google-client-secret --data-file=-

echo "  Secrets stored."

# 7. Initialize App Engine (if not already)
echo "==> Initializing App Engine..."
gcloud app create --region="$REGION" 2>/dev/null || echo "  (App Engine already initialized)"

# 8. Print the GitHub secrets to configure
echo ""
echo "============================================================"
echo "  DONE! Add these secrets to your GitHub repo:"
echo "  https://github.com/$GITHUB_REPO/settings/secrets/actions"
echo "============================================================"
echo ""
echo "  GCP_PROJECT_ID              = $PROJECT_ID"
echo "  GCP_REGION                  = $REGION"
echo "  GCP_SERVICE_ACCOUNT         = $SA_EMAIL"
echo "  GCP_WORKLOAD_IDENTITY_PROVIDER = $WORKLOAD_IDENTITY_PROVIDER"
echo ""
echo "Or set them with the GitHub CLI:"
echo ""
echo "  gh secret set GCP_PROJECT_ID --body \"$PROJECT_ID\""
echo "  gh secret set GCP_REGION --body \"$REGION\""
echo "  gh secret set GCP_SERVICE_ACCOUNT --body \"$SA_EMAIL\""
echo "  gh secret set GCP_WORKLOAD_IDENTITY_PROVIDER --body \"$WORKLOAD_IDENTITY_PROVIDER\""
echo ""
