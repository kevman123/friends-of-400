export interface DonationRequest {
  category: string;
  amount: number;
  frequency: 'one-time' | 'monthly';
  donorName?: string;
  donorEmail?: string;
}

export interface DonationResponse {
  success: boolean;
  referenceId: string;
  message: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: 'general' | 'volunteer' | 'sponsor';
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface DonationCategory {
  id: string;
  name: string;
  description: string;
  accent: AccentName;
  provider: 'Funraise' | 'Amazon';
  actionLabel: string;
}

export interface VolunteerOpportunity {
  id: string;
  title: string;
  description: string;
  label: string;
  url: string;
  accent: AccentName;
  actionLabel?: string;
  note?: string;
}

export type AccentName = 'plum' | 'forest' | 'sky' | 'sunshine' | 'coral' | 'leaf';

export interface ImageAsset {
  src: string;
  srcSet?: string;
  width: number;
  height: number;
  alt: string;
  position?: string;
}

export interface Program {
  id: string;
  name: string;
  shortName: string;
  summary: string;
  audience: string;
  activities: string[];
  schedule?: string;
  location?: string;
  participation: string;
  support: string;
  accent: AccentName;
  image: ImageAsset;
}

export interface Partner {
  name: string;
  summary: string;
  contribution?: string;
  website?: string;
  logo?: ImageAsset;
  featured?: boolean;
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio?: string;
  photo?: ImageAsset;
}

export interface ImpactStat {
  value: string;
  label: string;
  context?: string;
}

export interface ExternalLinks {
  donation: {
    defaultUrl: string;
    categoryUrls: Record<string, string>;
  };
  volunteerUrl: string;
  newsletterUrl: string;
  partnerInquiryUrl: string;
  contactFormUrl: string;
  privacyUrl: string;
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
    linkedin: string;
  };
}

export interface OrganizationInfo {
  name: string;
  tagline: string;
  mission: string;
  contactEmail: string;
  contactPhone: string;
  serviceArea: string;
  taxId: string;
}

export interface AuthUser {
  email: string;
  name: string;
  isAuthenticated: boolean;
}

export interface AdminDonation {
  id: string;
  donorName: string;
  donorEmail: string;
  amount: number;
  category: string;
  frequency: string;
  date: string;
  referenceId: string;
}

export interface AdminContact {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  type: string;
  date: string;
}

export interface AdminStats {
  totalDonations: number;
  totalAmount: number;
  totalContacts: number;
}

export interface AdminImage {
  id: string;
  fileName: string;
  altText: string;
  category: string;
  url: string;
  uploadedAt: string;
}
