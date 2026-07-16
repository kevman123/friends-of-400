import {
  images,
  impactPlaceholders,
  impactStats,
} from '../../content/siteContent';
import Container from '../ui/Container';
import ResponsiveImage from '../ui/ResponsiveImage';

export default function ImpactSection() {
  const isPlaceholder = impactStats.length === 0;
  const displayedStats = isPlaceholder ? impactPlaceholders : impactStats;

  return (
    <section
      id="impact"
      className="scroll-mt-32 overflow-hidden bg-brand-plum py-18 text-white sm:py-24"
      aria-labelledby="home-impact-heading"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[.14em] text-brand-sunshine">
              Our impact
            </p>
            <h2
              id="home-impact-heading"
              className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl"
            >
              Growing stronger roots, one opportunity at a time
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-white/85">
              Friends of 400 will use this section to share verified results, program
              milestones, and stories that show how community support reaches young people.
            </p>
            {isPlaceholder && (
              <p className="mt-4 inline-flex rounded-full bg-brand-sunshine px-4 py-2 text-sm font-black text-brand-ink">
                Verified impact details are coming soon
              </p>
            )}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {displayedStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[1.75rem] border border-white/15 bg-white/8 p-6 sm:p-7"
            >
              <p
                className={`font-heading text-4xl font-semibold ${
                  isPlaceholder ? 'text-white/45' : 'text-brand-sunshine'
                }`}
              >
                {stat.value}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{stat.label}</h3>
              {stat.context && (
                <p className="mt-2 text-sm leading-relaxed text-white/80">{stat.context}</p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-8 grid overflow-hidden rounded-[2rem] bg-brand-cream text-brand-ink shadow-2xl lg:grid-cols-[.95fr_1.05fr]">
          <ResponsiveImage
            image={images.communityPartners}
            sizes="(min-width: 1024px) 43vw, 92vw"
            className="aspect-[4/3] h-full w-full object-cover"
          />
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="eyebrow">Stories behind the numbers</p>
            <h3 className="text-3xl font-semibold text-brand-plum sm:text-4xl">
              Community impact is personal
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-brand-ink/78">
              This space is ready for an approved story from a participant, family,
              volunteer, or community partner. It can highlight a meaningful milestone,
              describe how a need was met, and connect the results to the people who made
              them possible.
            </p>
            <p className="mt-5 text-sm font-bold text-brand-forest">
              Story and attribution will be added after review and publication approval.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
