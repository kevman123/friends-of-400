import type {
  AccentName,
  DonationCategory,
  ExternalLinks,
  ImageAsset,
  ImpactStat,
  LeadershipMember,
  OrganizationInfo,
  Partner,
  Program,
} from '../types';

const configured = (value: string | undefined) => value?.trim() ?? '';

const optimizedImage = (
  stem: string,
  alt: string,
  position?: string,
): ImageAsset => ({
  src: `/images/optimized/${stem}-960.jpg`,
  srcSet: [
    `/images/optimized/${stem}-640.jpg 640w`,
    `/images/optimized/${stem}-960.jpg 960w`,
    `/images/optimized/${stem}-1440.jpg 1440w`,
  ].join(', '),
  width: 1440,
  height: 1080,
  alt,
  position,
});

export const images = {
  communityKids: optimizedImage(
    'community-kids',
    'Three children smiling together at a Friends of 400 community event',
    'center 38%',
  ),
  scouts: optimizedImage(
    'scouts',
    'A Cub Scout and another child smiling at a neighborhood gathering',
    'center 32%',
  ),
  educationSupport: optimizedImage(
    'education-support',
    'A child smiling while receiving a backpack at a school-support event',
    'center 38%',
  ),
  volunteersAndYouth: optimizedImage(
    'volunteers-and-youth',
    'A child and two volunteers smiling together at a community event',
    'center 34%',
  ),
  communityPartners: optimizedImage(
    'community-partners',
    'Local volunteers, families, and organizations gathered for a neighborhood serve day',
    'center 48%',
  ),
  sports: {
    src: '/images/serve-day/Apr2022Serve5.JPG',
    width: 648,
    height: 490,
    alt: 'Children enjoying an outdoor activity at a community serve day',
    position: 'center',
  },
} satisfies Record<string, ImageAsset>;

export const organization: OrganizationInfo = {
  name: 'Friends of 400',
  tagline: 'Planting Strong Roots for the Future',
  mission:
    'Friends of 400 invests in young people through education, scouting, sports, and community support so every child has room to learn, belong, and grow.',
  contactEmail: configured(import.meta.env.VITE_CONTACT_EMAIL),
  contactPhone: configured(import.meta.env.VITE_CONTACT_PHONE),
  serviceArea: configured(import.meta.env.VITE_SERVICE_AREA),
  taxId: configured(import.meta.env.VITE_TAX_ID),
};

export const externalLinks: ExternalLinks = {
  donation: {
    defaultUrl: configured(import.meta.env.VITE_DONATION_URL),
    categoryUrls: {
      'general-fund': configured(import.meta.env.VITE_DONATE_GENERAL_FUND_URL),
      'monthly-support': configured(import.meta.env.VITE_DONATE_MONTHLY_SUPPORT_URL),
      'educational-incentives': configured(
        import.meta.env.VITE_DONATE_EDUCATIONAL_INCENTIVES_URL,
      ),
      'hygiene-kits': configured(import.meta.env.VITE_DONATE_HYGIENE_KITS_URL),
      'soccer-sponsorships': configured(
        import.meta.env.VITE_DONATE_SOCCER_SPONSORSHIPS_URL,
      ),
      'transportation-fund': configured(
        import.meta.env.VITE_DONATE_TRANSPORTATION_FUND_URL,
      ),
    },
  },
  volunteerUrl: configured(import.meta.env.VITE_VOLUNTEER_URL),
  newsletterUrl: configured(import.meta.env.VITE_NEWSLETTER_URL),
  partnerInquiryUrl: configured(import.meta.env.VITE_PARTNER_INQUIRY_URL),
  contactFormUrl: configured(import.meta.env.VITE_CONTACT_FORM_URL),
  privacyUrl: configured(import.meta.env.VITE_PRIVACY_URL),
  social: {
    facebook: configured(import.meta.env.VITE_FACEBOOK_URL),
    instagram: configured(import.meta.env.VITE_INSTAGRAM_URL),
    youtube: configured(import.meta.env.VITE_YOUTUBE_URL),
    linkedin: configured(import.meta.env.VITE_LINKEDIN_URL),
  },
};

export const programs: Program[] = [
  {
    id: 'scouts',
    name: 'Scouting',
    shortName: 'Scouts',
    summary:
      'Hands-on experiences help young people build confidence, practical skills, friendships, and a habit of serving others.',
    audience: 'Children and young people in the communities Friends of 400 serves.',
    activities: [
      'Skill-building and leadership experiences',
      'Community service and positive mentoring',
      'Support with participation needs and supplies',
    ],
    participation:
      'Contact Friends of 400 to ask about current scouting opportunities and enrollment details.',
    support:
      'Supporters can mentor, help with activities, contribute supplies, or designate a gift for scouting.',
    accent: 'sky',
    image: images.scouts,
  },
  {
    id: 'education',
    name: 'Education & Tutoring',
    shortName: 'Education',
    summary:
      'Academic encouragement, tutoring, school supplies, and milestone incentives help students keep learning and moving forward.',
    audience: 'School-age children who can benefit from added academic and practical support.',
    activities: [
      'Tutoring and academic encouragement',
      'Back-to-school supplies and essential resources',
      'Positive incentives that celebrate student progress',
    ],
    participation:
      'Contact Friends of 400 to ask about current tutoring, school-support, or student opportunities.',
    support:
      'Volunteer as a tutor or mentor, contribute school supplies, or support educational incentives.',
    accent: 'sunshine',
    image: images.educationSupport,
  },
  {
    id: 'sports',
    name: 'Sports & Recreation',
    shortName: 'Sports',
    summary:
      'Access to recreation gives children a place to move, practice teamwork, build confidence, and connect with caring adults.',
    audience: 'Young people interested in safe, encouraging team and recreation opportunities.',
    activities: [
      'Support with uniforms, equipment, and participation fees',
      'Encouraging coaching and positive team experiences',
      'Community recreation and outdoor activities',
    ],
    participation:
      'Contact Friends of 400 to ask which sports and recreation opportunities are currently available.',
    support:
      'Volunteer as a coach or event helper, provide equipment, or give toward participation costs.',
    accent: 'coral',
    image: images.sports,
  },
];

export const donationCategories: DonationCategory[] = [
  {
    id: 'general-fund',
    name: 'General Fund',
    description:
      'Help meet urgent needs and sustain programs for local children and families.',
    accent: 'plum',
  },
  {
    id: 'monthly-support',
    name: 'Monthly Support',
    description:
      'Provide steady, reliable support that helps Friends of 400 plan ahead.',
    accent: 'forest',
  },
  {
    id: 'educational-incentives',
    name: 'Educational Incentives',
    description:
      'Celebrate student progress with practical rewards and positive encouragement.',
    accent: 'sunshine',
  },
  {
    id: 'hygiene-kits',
    name: 'Hygiene Kits',
    description:
      'Provide children with everyday essentials such as shampoo, deodorant, and toothpaste.',
    accent: 'sky',
  },
  {
    id: 'soccer-sponsorships',
    name: 'Soccer Sponsorships',
    description:
      'Help cover uniforms, equipment, and participation costs so children can play.',
    accent: 'coral',
  },
  {
    id: 'transportation-fund',
    name: 'Transportation Fund',
    description:
      'Help young people get safely to programs, activities, and community events.',
    accent: 'leaf',
  },
];

export const partners: Partner[] = [];
export const leadership: LeadershipMember[] = [];
export const impactStats: ImpactStat[] = [];
export const impactPlaceholders: ImpactStat[] = [
  {
    value: '—',
    label: 'Young people supported',
    context: 'A verified reach total will be added here.',
  },
  {
    value: '—',
    label: 'Programs and experiences',
    context: 'Confirmed participation details will be added here.',
  },
  {
    value: '—',
    label: 'Volunteer and partner support',
    context: 'Verified community contribution details will be added here.',
  },
];

export const partnerRequirements = [
  'Alignment with the Friends of 400 mission and values',
  'A commitment to safe, respectful engagement with young people',
  'An ongoing annual contribution of funding, supplies, volunteers, facilities, or expertise',
  'A designated organizational contact',
  'Permission to use the organization’s name and logo',
  'Annual confirmation that the partnership remains active',
];

export const partnershipWays: Array<{
  title: string;
  description: string;
  accent: AccentName;
}> = [
  {
    title: 'Fund a need',
    description: 'Provide flexible support or help sustain a specific program priority.',
    accent: 'plum',
  },
  {
    title: 'Give in kind',
    description: 'Contribute supplies, equipment, transportation, food, or other practical resources.',
    accent: 'sunshine',
  },
  {
    title: 'Engage volunteers',
    description: 'Bring a team to serve at an activity, event, or ongoing program.',
    accent: 'coral',
  },
  {
    title: 'Share expertise or space',
    description: 'Offer professional skills, facilities, or specialized support that expands capacity.',
    accent: 'sky',
  },
];

export const publicNavigation = [
  { label: 'About', to: '/about' },
  { label: 'Impact', to: '/impact' },
  { label: 'Programs', to: '/programs' },
  { label: 'Partners', to: '/partners' },
  { label: 'Get Involved', to: '/get-involved' },
  { label: 'Contact', to: '/contact' },
];

export function getDonationUrl(categoryId?: string) {
  if (categoryId) {
    const categoryUrl = externalLinks.donation.categoryUrls[categoryId];
    if (categoryUrl) return categoryUrl;
  }

  return externalLinks.donation.defaultUrl;
}

export function getContactHref(subject?: string) {
  if (externalLinks.contactFormUrl) return externalLinks.contactFormUrl;
  if (!organization.contactEmail) return '';

  const query = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${organization.contactEmail}${query}`;
}
