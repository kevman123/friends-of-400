import { useParams } from 'react-router';
import { Link } from 'react-router';
import Button from '../components/ui/Button';
import ConfiguredAction from '../components/ui/ConfiguredAction';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import {
  donationCategories,
  getDonationUrl,
  images,
} from '../content/siteContent';

const accentStyles = {
  plum: 'bg-brand-plum',
  forest: 'bg-brand-forest',
  sky: 'bg-brand-sky',
  sunshine: 'bg-brand-sunshine',
  coral: 'bg-brand-coral',
  leaf: 'bg-brand-leaf',
};

export default function DonatePage() {
  const { category } = useParams();
  const selectedCategory = category
    ? donationCategories.find((item) => item.id === category) ?? donationCategories[0]
    : undefined;
  const donationUrl = getDonationUrl(selectedCategory?.id);

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Give toward the kind of support that helps children grow"
        description="Choose a program priority or give wherever support is needed most. Friends of 400 never collects payment information directly on this website."
        image={images.educationSupport}
        accent="sunshine"
      />

      <section className="bg-white py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Choose a giving area"
            title="Direct your support"
            description="Select a category to review it before continuing to the configured secure giving provider."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {donationCategories.map((item) => {
              const isSelected = selectedCategory?.id === item.id;

              return (
                <Link
                  key={item.id}
                  to={`/donate/${item.id}`}
                  className={`group rounded-[1.75rem] border-2 p-6 no-underline transition ${
                    isSelected
                      ? 'border-brand-plum bg-brand-cream shadow-lg'
                      : 'border-brand-plum/10 bg-white hover:-translate-y-1 hover:border-brand-plum/25 hover:shadow-lg'
                  }`}
                  aria-current={isSelected ? 'page' : undefined}
                >
                  <span className={`block h-2.5 w-16 rounded-full ${accentStyles[item.accent]}`} aria-hidden="true" />
                  <h3 className="mt-5 text-2xl font-semibold text-brand-plum">{item.name}</h3>
                  <p className="mt-3 leading-relaxed text-brand-ink/72">{item.description}</p>
                  <span className="mt-5 inline-flex min-h-11 items-center font-extrabold text-brand-forest">
                    Select this area
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {selectedCategory && (
        <section id="give-online" className="scroll-mt-32 bg-brand-cream py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-brand-plum/10 bg-white p-7 text-center shadow-xl sm:p-10">
              <span className={`mx-auto block h-3 w-20 rounded-full ${accentStyles[selectedCategory.accent]}`} aria-hidden="true" />
              <p className="eyebrow mt-7">Selected giving area</p>
              <h2 className="text-4xl font-semibold text-brand-plum">{selectedCategory.name}</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-brand-ink/75">
                {selectedCategory.description}
              </p>

              {donationUrl ? (
                <>
                  <p className="mt-6 text-sm font-bold text-brand-forest">
                    You will leave Friends of 400 and continue with the secure giving provider.
                  </p>
                  <ConfiguredAction href={donationUrl} size="lg" className="mt-7">
                    Continue to secure giving
                  </ConfiguredAction>
                </>
              ) : (
                <div className="mt-7 rounded-[1.5rem] border border-brand-sunshine/60 bg-brand-sunshine/18 p-5">
                  <h3 className="text-xl font-semibold text-brand-plum">Online giving is being configured</h3>
                  <p className="mt-2 leading-relaxed text-brand-ink/75">
                    No payment information is collected on this site, and no donation has been
                    submitted. A secure giving link will appear here once the provider is approved.
                  </p>
                  <ConfiguredAction
                    href=""
                    unavailableLabel="Giving link coming soon"
                    size="lg"
                    className="mt-5"
                  >
                    Continue to secure giving
                  </ConfiguredAction>
                </div>
              )}

              <div className="mt-8 border-t border-brand-plum/10 pt-7">
                <Button href="/contact?topic=donation" variant="outline">
                  Ask a giving question
                </Button>
              </div>
            </div>
          </Container>
        </section>
      )}

      {!selectedCategory && (
        <section className="bg-brand-forest py-14 text-white">
          <Container className="text-center">
            <h2 className="text-3xl font-semibold text-white">Choose a giving area above to continue</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/85">
              You will review the selected purpose before any link to an external payment provider appears.
            </p>
          </Container>
        </section>
      )}
    </>
  );
}
