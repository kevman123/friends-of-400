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
  VolunteerOpportunity,
} from '../types';

const configured = (value: string | undefined) => value?.trim() ?? '';
const withDefault = (
  fallback: string,
  ...values: Array<string | undefined>
) => values.map(configured).find(Boolean) ?? fallback;

// Public destinations synchronized from https://linktr.ee/searcyvolunteers on 2026-07-16.
// Environment variables remain available as deployment-time overrides.
const publicActionDefaults = {
  generalFund:
    'https://funraise.org/give/Friends-of-400-Foundation/08642a24-9f95-4849-94ae-1d4024408387/',
  monthlySupport:
    'https://funraise.org/give/Friends-of-400-Foundation/4b0035f6-0bd3-48a1-bed6-2b43db27285b',
  emergencySupport:
    'https://funraise.org/give/Friends-of-400-Foundation/32fcd214-2aef-4144-b5b2-67c60bfaa0f5',
  sportsSponsorships:
    'https://funraise.org/give/Friends-of-400-Foundation/69840cfb-bb44-409e-b356-11ae91c98f20',
  educationProgram:
    'https://funraise.org/give/Friends-of-400-Foundation/02c4c05d-b2f7-4d0f-9b29-0c6c6ccae282',
  transportationFund:
    'https://funraise.org/give/Friends-of-400-Foundation/65b97a66-3288-45a5-8024-e0405315d301',
  amazonWishList: 'https://a.co/cFnWKnm',
  schoolSupplyDrive:
    'https://funraise.org/give/Friends-of-400-Foundation/9ae7a7b8-703f-42bb-81bd-e9cb9906a52f',
  volunteerInterest: 'https://form.jotform.com/251216466318052',
  itemDeliveryVolunteer: 'https://form.jotform.com/252615869574067',
  volunteerTutor: 'https://form.jotform.com/250537566972165',
  summerProgramVolunteer: 'https://form.jotform.com/260895547543166',
  greatFirstDayVolunteer: 'https://form.jotform.com/261807732458161',
  facebook: 'https://www.facebook.com/profile.php?id=61572466671292',
} as const;

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
    defaultUrl: withDefault(
      publicActionDefaults.generalFund,
      import.meta.env.VITE_DONATION_URL,
    ),
    categoryUrls: {
      'general-fund': withDefault(
        publicActionDefaults.generalFund,
        import.meta.env.VITE_DONATE_GENERAL_FUND_URL,
      ),
      'monthly-support': withDefault(
        publicActionDefaults.monthlySupport,
        import.meta.env.VITE_DONATE_MONTHLY_SUPPORT_URL,
      ),
      'emergency-support': withDefault(
        publicActionDefaults.emergencySupport,
        import.meta.env.VITE_DONATE_EMERGENCY_SUPPORT_URL,
      ),
      'soccer-sponsorships': withDefault(
        publicActionDefaults.sportsSponsorships,
        import.meta.env.VITE_DONATE_SPORTS_SPONSORSHIPS_URL,
        import.meta.env.VITE_DONATE_SOCCER_SPONSORSHIPS_URL,
      ),
      'educational-incentives': withDefault(
        publicActionDefaults.educationProgram,
        import.meta.env.VITE_DONATE_EDUCATION_PROGRAM_URL,
        import.meta.env.VITE_DONATE_EDUCATIONAL_INCENTIVES_URL,
      ),
      'transportation-fund': withDefault(
        publicActionDefaults.transportationFund,
        import.meta.env.VITE_DONATE_TRANSPORTATION_FUND_URL,
      ),
      'amazon-wish-list': withDefault(
        publicActionDefaults.amazonWishList,
        import.meta.env.VITE_AMAZON_WISH_LIST_URL,
      ),
      'school-supply-drive': withDefault(
        publicActionDefaults.schoolSupplyDrive,
        import.meta.env.VITE_DONATE_SCHOOL_SUPPLY_DRIVE_URL,
      ),
    },
  },
  volunteerUrl: withDefault(
    publicActionDefaults.volunteerInterest,
    import.meta.env.VITE_VOLUNTEER_GENERAL_URL,
    import.meta.env.VITE_VOLUNTEER_URL,
  ),
  newsletterUrl: configured(import.meta.env.VITE_NEWSLETTER_URL),
  partnerInquiryUrl: configured(import.meta.env.VITE_PARTNER_INQUIRY_URL),
  contactFormUrl: configured(import.meta.env.VITE_CONTACT_FORM_URL),
  privacyUrl: configured(import.meta.env.VITE_PRIVACY_URL),
  social: {
    facebook: withDefault(
      publicActionDefaults.facebook,
      import.meta.env.VITE_FACEBOOK_URL,
    ),
    instagram: configured(import.meta.env.VITE_INSTAGRAM_URL),
    youtube: configured(import.meta.env.VITE_YOUTUBE_URL),
    linkedin: configured(import.meta.env.VITE_LINKEDIN_URL),
  },
};

const volunteerTutorOverride = configured(
  import.meta.env.VITE_VOLUNTEER_TUTOR_URL,
);

export const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    id: 'great-first-day-2026',
    title: 'Project Great First Day Volunteer Sign-Up 2026',
    description:
      'Help with Project Great First Day and support students as they prepare for the new school year.',
    label: 'Seasonal event',
    url: withDefault(
      publicActionDefaults.greatFirstDayVolunteer,
      import.meta.env.VITE_VOLUNTEER_GREAT_FIRST_DAY_URL,
    ),
    accent: 'sunshine',
  },
  {
    id: 'volunteer-interest',
    title: 'Volunteer Interest Form',
    description:
      'Share your interests, availability, and the kinds of service you would like to offer.',
    label: 'Start here',
    url: externalLinks.volunteerUrl,
    accent: 'forest',
  },
  {
    id: 'summer-program',
    title: 'Summer Program Volunteer Interest Form',
    description:
      'Express interest in helping with Friends of 400 summer programming.',
    label: 'Summer program',
    url: withDefault(
      publicActionDefaults.summerProgramVolunteer,
      import.meta.env.VITE_VOLUNTEER_SUMMER_PROGRAM_URL,
    ),
    accent: 'coral',
  },
  {
    id: 'item-delivery',
    title: 'Item Delivery Volunteer Sign-Up',
    description:
      'Sign up to help Friends of 400 with item deliveries and practical logistics.',
    label: 'Logistics',
    url: withDefault(
      publicActionDefaults.itemDeliveryVolunteer,
      import.meta.env.VITE_VOLUNTEER_ITEM_DELIVERY_URL,
    ),
    accent: 'sky',
  },
  {
    id: 'volunteer-tutor',
    title: 'Volunteer Tutor Sign-Up',
    description:
      'Sign up to support students through tutoring and academic encouragement.',
    label: 'Education',
    url: volunteerTutorOverride || externalLinks.volunteerUrl,
    accent: 'leaf',
    actionLabel: volunteerTutorOverride
      ? 'Open sign-up form'
      : 'Use the volunteer interest form',
    note: volunteerTutorOverride
      ? undefined
      : 'The tutor-specific form currently listed on Linktree is unavailable. Use the general form and mention your interest in tutoring.',
  },
];

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
    name: 'Friends of 400 General Fund',
    description:
      'Help meet urgent needs and sustain programs for local children and families.',
    accent: 'plum',
    provider: 'Funraise',
    actionLabel: 'Give to the general fund',
  },
  {
    id: 'monthly-support',
    name: 'Become a Monthly Donor',
    description:
      'Provide steady, reliable support that helps Friends of 400 plan ahead.',
    accent: 'forest',
    provider: 'Funraise',
    actionLabel: 'Become a monthly donor',
  },
  {
    id: 'emergency-support',
    name: 'Emergency Support Fund',
    description:
      'Help Friends of 400 respond to urgent needs affecting local children and families.',
    accent: 'coral',
    provider: 'Funraise',
    actionLabel: 'Give to emergency support',
  },
  {
    id: 'school-supply-drive',
    name: 'School Supply Drive Fund — Project Great First Day',
    description:
      'Help provide backpacks and school supplies so students can begin the year ready to learn.',
    accent: 'sunshine',
    provider: 'Funraise',
    actionLabel: 'Support the school supply drive',
  },
  {
    id: 'soccer-sponsorships',
    name: 'Sports Sponsorships',
    description:
      'Help cover uniforms, equipment, and participation costs so children can play.',
    accent: 'sky',
    provider: 'Funraise',
    actionLabel: 'Sponsor youth sports',
  },
  {
    id: 'educational-incentives',
    name: 'Education Program',
    description:
      'Support year-round tutoring, individualized academic help, and student progress.',
    accent: 'leaf',
    provider: 'Funraise',
    actionLabel: 'Support the education program',
  },
  {
    id: 'transportation-fund',
    name: 'Transportation Fund',
    description:
      'Help young people get safely to programs, activities, and community events.',
    accent: 'coral',
    provider: 'Funraise',
    actionLabel: 'Give to transportation',
  },
  {
    id: 'amazon-wish-list',
    name: 'Amazon Wish List',
    description:
      'Purchase requested supplies and have them sent through the Friends of 400 Amazon wish list.',
    accent: 'sunshine',
    provider: 'Amazon',
    actionLabel: 'Open the Amazon wish list',
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
