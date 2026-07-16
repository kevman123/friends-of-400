import Container from '../ui/Container';

interface PerformanceLevel {
  label: string;
  value: number;
  barClass: string;
  dotClass: string;
  context?: string;
}

interface PerformanceSnapshot {
  title: string;
  timeframe: string;
  levels: PerformanceLevel[];
}

const performanceSnapshots: PerformanceSnapshot[] = [
  {
    title: 'Start of Year',
    timeframe: 'August 2025',
    levels: [
      {
        label: 'Below Grade Level',
        value: 83,
        barClass: 'bg-brand-coral text-brand-plum-dark',
        dotClass: 'bg-brand-coral',
      },
      {
        label: 'On Grade Level',
        value: 17,
        barClass: 'bg-brand-sunshine text-brand-ink',
        dotClass: 'bg-brand-sunshine',
      },
      {
        label: 'Above Grade Level',
        value: 0,
        barClass: 'bg-brand-leaf text-brand-ink',
        dotClass: 'bg-brand-leaf',
      },
    ],
  },
  {
    title: 'Current Progress',
    timeframe: 'July 2026',
    levels: [
      {
        label: 'Below Grade Level',
        value: 41,
        barClass: 'bg-brand-coral text-brand-plum-dark',
        dotClass: 'bg-brand-coral',
        context: 'Cut by more than half!',
      },
      {
        label: 'On Grade Level',
        value: 41,
        barClass: 'bg-brand-sunshine text-brand-ink',
        dotClass: 'bg-brand-sunshine',
      },
      {
        label: 'Above Grade Level',
        value: 18,
        barClass: 'bg-brand-leaf text-brand-ink',
        dotClass: 'bg-brand-leaf',
        context: 'A massive leap forward',
      },
    ],
  },
];

const gradeLevelSpotlights = [
  {
    label: 'Kindergarten Superstars',
    value: '92%',
    description:
      'of Kindergarteners moved into or above their expected grade level.',
    accentClass: 'bg-brand-sunshine text-brand-plum',
  },
  {
    label: 'Early Elementary Growth',
    value: '36%',
    description:
      'average across 1st, 2nd, and 3rd graders moving into or exceeding their grade level after making massive strides.',
    accentClass: 'bg-brand-sky text-brand-ink',
  },
  {
    label: 'Overall Engagement',
    value: '70%+',
    description:
      'of students are meeting their usage goals in the majority of classes, helping to drive this incredible growth.',
    accentClass: 'bg-brand-leaf text-brand-ink',
  },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="relative scroll-mt-32 overflow-hidden bg-brand-plum text-white"
      aria-labelledby="impact-heading"
    >
      <div
        className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-sky/12"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 -top-20 h-80 w-80 rounded-[42%_58%_66%_34%/45%_38%_62%_55%] bg-brand-coral/15"
        aria-hidden="true"
      />
      <div
        className="dot-pattern absolute right-[8%] top-52 hidden h-40 w-56 opacity-25 lg:block"
        aria-hidden="true"
      />

      <Container className="relative py-14 sm:py-18 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[.15em] text-brand-sunshine">
              Friends of 400 Progress
              <span className="mt-1 block text-white/70">
                Academic Growth: Aug 2025 &ndash; Jul 2026
              </span>
            </p>
            <h1
              id="impact-heading"
              className="mt-5 max-w-4xl text-5xl font-semibold leading-[.98] text-white sm:text-6xl lg:text-7xl"
            >
              Empowering <span className="text-brand-sunshine">75 Students</span> to Succeed
            </h1>
          </div>

          <div className="relative">
            <div className="rounded-[2.25rem] border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-sm sm:p-9">
              <p className="text-sm font-black uppercase tracking-[.16em] text-brand-sunshine">
                The impact
              </p>
              <p className="mt-2 font-heading text-7xl font-semibold leading-none text-white sm:text-8xl">
                41%
              </p>
              <p className="mt-5 max-w-xl text-xl font-bold leading-relaxed text-white sm:text-2xl">
                ...of our students moved into or{' '}
                <em className="text-brand-sunshine">above</em> their expected Grade Level of
                Material!
              </p>
            </div>
            <div
              className="absolute -bottom-5 -right-4 h-20 w-20 rounded-[60%_40%_44%_56%] bg-brand-sunshine sm:-right-7 sm:h-28 sm:w-28"
              aria-hidden="true"
            />
          </div>
        </div>

        <div
          className="mt-16 rounded-[2.5rem] bg-brand-cream p-6 text-brand-ink shadow-2xl sm:p-9 lg:p-12"
          aria-labelledby="closing-the-gap-heading"
        >
          <div className="max-w-3xl">
            <p className="eyebrow">Before vs. after</p>
            <h2
              id="closing-the-gap-heading"
              className="text-4xl font-semibold leading-tight text-brand-plum sm:text-5xl"
            >
              Closing the Gap
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-ink/75">
              See how the overall student population shifted from the start of the academic year
              to current progress.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {performanceSnapshots.map((snapshot) => {
              const summary = snapshot.levels
                .map((level) => `${level.value}% ${level.label.toLowerCase()}`)
                .join(', ');

              return (
                <article
                  key={snapshot.title}
                  className="rounded-[2rem] border border-brand-plum/10 bg-white p-6 shadow-[0_16px_45px_rgba(36,49,58,.08)] sm:p-8"
                >
                  <div className="flex flex-wrap items-end justify-between gap-2">
                    <h3 className="text-2xl font-semibold text-brand-plum sm:text-3xl">
                      {snapshot.title}
                    </h3>
                    <p className="text-sm font-black uppercase tracking-[.12em] text-brand-forest">
                      {snapshot.timeframe}
                    </p>
                  </div>

                  <div
                    className="mt-6 flex h-12 overflow-hidden rounded-full bg-brand-plum/8 shadow-inner"
                    role="img"
                    aria-label={`${snapshot.title}: ${summary}`}
                  >
                    {snapshot.levels
                      .filter((level) => level.value > 0)
                      .map((level) => (
                        <div
                          key={level.label}
                          className={`flex items-center justify-center text-sm font-black sm:text-base ${level.barClass}`}
                          style={{ width: `${level.value}%` }}
                          aria-hidden="true"
                        >
                          {level.value}%
                        </div>
                      ))}
                  </div>

                  <dl className="mt-7 grid gap-4 sm:grid-cols-3">
                    {snapshot.levels.map((level) => (
                      <div key={level.label}>
                        <dt className="flex items-center gap-2 text-sm font-bold text-brand-ink/70">
                          <span
                            className={`h-3 w-3 shrink-0 rounded-full ${level.dotClass}`}
                            aria-hidden="true"
                          />
                          {level.label}
                        </dt>
                        <dd className="mt-1 font-heading text-3xl font-semibold text-brand-plum">
                          {level.value}%
                        </dd>
                        {level.context && (
                          <dd className="mt-1 text-sm font-extrabold leading-snug text-brand-forest">
                            {level.context}
                          </dd>
                        )}
                      </div>
                    ))}
                  </dl>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-16" aria-labelledby="major-milestones-heading">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[.15em] text-brand-sunshine">
              Grade-level spotlights
            </p>
            <h2
              id="major-milestones-heading"
              className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl"
            >
              Celebrating Major Milestones
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {gradeLevelSpotlights.map((spotlight) => (
              <article
                key={spotlight.label}
                className="flex h-full flex-col rounded-[2rem] border border-white/15 bg-white/8 p-6 sm:p-8"
              >
                <p
                  className={`inline-flex w-fit rounded-2xl px-4 py-2 font-heading text-4xl font-semibold ${spotlight.accentClass}`}
                >
                  {spotlight.value}
                </p>
                <h3 className="mt-6 text-2xl font-semibold text-white">{spotlight.label}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/80">
                  {spotlight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
