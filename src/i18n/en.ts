// English site copy. zh.ts must match this shape (enforced by the Content type).
const en = {
  meta: {
    htmlLang: 'en',
    siteName: 'Ruyi Global Foundation',
    defaultDescription:
      'Ruyi Global Foundation is a 501(c)(3) nonprofit connecting young adults with retired professionals for intergenerational, cross-cultural mentorship.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    programs: 'Programs',
    getInvolved: 'Get Involved',
    contact: 'Contact',
    donate: 'Donate',
    menu: 'Menu',
    skip: 'Skip to main content',
  },
  footer: {
    tagline: 'Experience should not retire when people do.',
    status: '501(c)(3) tax-exempt nonprofit',
    ein: 'EIN',
    privacy: 'Privacy Policy',
    rights: 'All rights reserved.',
  },
  common: {
    learnMore: 'Learn more',
    comingSoon: 'Coming 2028',
    pilot: 'Pilot',
    emailUs: 'Email us',
  },

  home: {
    title: 'Ruyi Global Foundation — Intergenerational Mentorship',
    description:
      'Connecting young adults with retired professionals for career and life mentorship. A 501(c)(3) nonprofit based in California, serving participants online nationwide.',
    hero: {
      eyebrow: '501(c)(3) Nonprofit · California',
      title: 'Experience should not retire when people do.',
      subtitle:
        'Ruyi Global Foundation connects young adults with retired professionals for mentorship that bridges generations and cultures, builds confidence, and opens career pathways.',
      ctaMentee: 'Find a Mentor',
      ctaMentor: 'Become a Mentor',
      ctaDonate: 'Support Our Mission',
    },
    mission: {
      eyebrow: 'Our Mission',
      text: 'We empower youth and young adults through transformative educational mentorship that bridges cultural divides, fosters academic excellence, and accelerates career development.',
    },
    audiences: {
      title: 'How you can be part of Ruyi',
      items: [
        {
          title: 'Young Adults (18–30)',
          text: 'Get perspective from people who have already navigated the decisions you face: first jobs, career changes, leadership, setbacks.',
          cta: 'Find a mentor',
          href: '/get-involved#mentees',
        },
        {
          title: 'Retired Professionals',
          text: 'Your decades of experience are still valuable. Share them with a younger generation on a flexible, limited schedule.',
          cta: 'Become a mentor',
          href: '/get-involved#mentors',
        },
        {
          title: 'Donors & Companies',
          text: 'Fund scholarships, sponsor a group of participants, or partner with us to bring mentorship to your community or employees.',
          cta: 'Support our work',
          href: '/donate',
        },
      ],
    },
    why: {
      title: 'Why Ruyi',
      items: [
        { title: 'Curated, not random', text: 'Mentors are matched by the specific experiences participants need, not only by job title.' },
        { title: 'Screened mentors', text: 'Every mentor completes screening, a code of conduct, and an orientation on listening and boundaries.' },
        { title: 'Accessible to all', text: 'Need-based scholarships make mentorship available regardless of financial means.' },
        { title: 'Online, nationwide', text: 'Virtual conversations let us connect participants and mentors anywhere in the U.S.' },
      ],
    },
    programs: {
      title: 'Our Programs',
    },
    launch: {
      title: 'Our mentorship pilot begins December 2026',
      text: 'We are recruiting our first mentors, participants, and partner organizations now.',
    },
    donateBand: {
      title: 'Help a young person learn from a lifetime of experience',
      text: 'Your gift funds scholarships, mentor screening, and training. Contributions are tax-deductible to the extent allowed by law.',
      cta: 'Donate Now',
    },
  },

  programs: {
    title: 'Our Programs',
    description: 'Mentorship programs from Ruyi Global Foundation for young adults (18–30) and, starting in 2028, youth (12–18).',
    intro: 'Ruyi delivers mentorship online so participants can learn from experienced people wherever they live.',
    network: {
      name: 'Retiree Mentorship Network',
      ages: 'Ages 18–30',
      status: 'Pilot begins December 2026',
      summary:
        'A curated network that connects young adults with retired professionals who share real career and life experience.',
    },
    youth: {
      name: 'Youth Academic & Cultural Mentorship',
      ages: 'Ages 12–18',
      status: 'Launching 2028',
      summary:
        'Small online groups for middle and high school students: academic support, English practice, cultural exchange, and college preparation.',
    },
  },

  network: {
    title: 'Retiree Mentorship Network',
    description:
      'Curated access to retired professionals for young adults seeking career and life perspective. Pilot pricing, need-based scholarships, online sessions.',
    hero: {
      eyebrow: 'Ages 18–30 · Online',
      title: 'Retiree Mentorship Network',
      subtitle: 'Curated access to trustworthy, relevant experience from people who have already walked the path.',
    },
    problem: {
      title: 'The gap we fill',
      text: 'Young adults need perspective that online content can’t give: what a career is really like, how experienced people handled setbacks, and what they wish they had known earlier. Meanwhile, retirees hold decades of knowledge that becomes harder to access once they leave the workforce. Ruyi builds a structured bridge between the two.',
    },
    value: {
      title: 'Who benefits',
      items: [
        { title: 'For participants', points: ['Access to decades of relevant experience', 'Perspective on careers, leadership, and decisions', 'Curated matching instead of random networking'] },
        { title: 'For retired mentors', points: ['A meaningful way to contribute after retirement', 'Flexible, limited commitment', 'Connection with younger generations'] },
      ],
    },
    steps: {
      title: 'How it works',
      items: [
        { title: 'Join', text: 'Choose a membership or join through a sponsoring organization.' },
        { title: 'Describe your need', text: 'Tell us your interests, goals, and the questions on your mind.' },
        { title: 'Get matched', text: 'Browse mentor profiles or receive recommendations from our team.' },
        { title: 'Meet', text: 'Book a virtual mentorship conversation. We send guidelines and reminders.' },
        { title: 'Reflect', text: 'Rate the conversation and identify your next step.' },
      ],
    },
    matches: {
      title: 'Example matches',
      needLabel: 'If you are…',
      mentorLabel: 'You might talk with…',
      items: [
        { need: 'Considering your first management role', mentor: 'A retired manager who led teams for 20+ years' },
        { need: 'Interested in a healthcare career', mentor: 'A retired nurse, physician, administrator, or researcher' },
        { need: 'Changing careers', mentor: 'A professional who successfully changed fields mid-career' },
        { need: 'Recovering from a career setback', mentor: 'A mentor who experienced a layoff, failure, or major transition' },
        { need: 'Starting a business', mentor: 'A retired founder or small-business owner' },
      ],
    },
    mentors: {
      title: 'Our mentors',
      text: 'Ruyi mentors are experienced people, not life coaches. Their qualification is relevant lived and professional experience. Every mentor completes:',
      points: [
        'Identity and background screening appropriate to the program',
        'A code of conduct and confidentiality agreement',
        'Scope and boundary guidance',
        'A short orientation on listening and sharing experience',
      ],
      note: 'Mentors share personal experience. They do not provide professional medical, legal, financial, or mental-health advice.',
    },
    pricing: {
      title: 'Pilot pricing',
      note: 'These are pilot prices for our first stage and may change as we learn from participants. Your fee supports mentor recruitment, screening, matching, scheduling, and quality control. Mentors volunteer their time.',
      individual: 'For individuals',
      organization: 'For organizations',
      plans: {
        trial: { name: 'Trial', period: '30 days', includes: 'Network access + 1 mentor conversation' },
        annual: { name: 'Annual', period: 'per year', includes: 'Network access + up to 4 matched conversations' },
        orgPilot: { name: 'Organization Pilot', period: '6 months', includes: 'Access for up to 25 participants' },
        orgAnnual: { name: 'Organization Annual', period: 'per year', includes: 'Access for up to 50 participants + reporting' },
      },
    },
    scholarship: {
      title: 'Scholarships',
      text: 'Cost should never be the reason someone goes without a mentor. Full scholarships are available for participants with household income at or below 200% of the federal poverty level.',
      cta: 'Scholarship details',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'Is this the same as life coaching?', a: 'No. Our mentors share their own career and life experience. They are not credentialed coaches and do not give professional medical, legal, financial, or mental-health advice.' },
        { q: 'Where do conversations happen?', a: 'All conversations are online by video, so you can join from anywhere.' },
        { q: 'What if my match isn’t a good fit?', a: 'You can ask for a new match at any time. Just let our team know.' },
        { q: 'Can my school or employer pay for access?', a: 'Yes. Organizations can purchase group access for their students, members, or employees. See our organization options.' },
        { q: 'Is my information kept private?', a: 'Yes. We collect only what we need, never sell personal information, and follow the California Consumer Privacy Act. See our Privacy Policy.' },
      ],
    },
    cta: { title: 'Ready to learn from experience?', mentee: 'Apply as a participant', mentor: 'Apply as a mentor' },
  },

  youth: {
    title: 'Youth Academic & Cultural Mentorship',
    description:
      'Coming in 2028: small-group online mentorship for students ages 12–18 covering academics, English practice, cultural exchange, and college preparation.',
    hero: {
      eyebrow: 'Ages 12–18 · Launching 2028',
      title: 'Youth Academic & Cultural Mentorship',
      subtitle: 'Empowering students through academic excellence, cultural confidence, and college readiness.',
    },
    overview: {
      title: 'About the program',
      text: 'Middle and high school students join small online groups of 4–8 students led by trained mentors. The program is especially valuable for English language learners, students from immigrant families, and first-generation college-bound students.',
    },
    audience: {
      title: 'Who it’s for',
      points: [
        'Middle and high school students (grades 7–12)',
        'English language learners',
        'Students from immigrant families',
        'First-generation college-bound students',
        'Students seeking academic support or college preparation',
      ],
    },
    topics: {
      title: 'What students work on',
      points: [
        'English conversation practice',
        'Math, science, English, and history support',
        'Homework help and study skills',
        'Cultural exchange and cross-cultural communication',
        'College applications, SAT/ACT preparation, and essays',
        'Time management, goal-setting, and self-advocacy',
      ],
    },
    safeguarding: {
      title: 'Keeping students safe',
      text: 'The safety of minors is our first priority.',
      points: [
        'Enhanced background checks for all mentors working with minors',
        'Mandatory reporter training for every youth mentor',
        'Parental consent required for all students under 18',
        'Parents may attend sessions or review recordings',
        'Sessions recorded (with consent) for quality assurance',
        'Clear reporting procedures and regular check-ins with parents',
        'Age-appropriate mentor matching and zero tolerance for inappropriate behavior',
      ],
    },
    waitlist: {
      title: 'Join the waitlist',
      text: 'We’re building this program carefully. Join the waitlist and we’ll contact you when enrollment opens.',
      cta: 'Join the waitlist',
    },
  },

  getInvolved: {
    title: 'Get Involved',
    description: 'Find a mentor, become a mentor, or bring Ruyi mentorship to your organization.',
    hero: {
      title: 'Get Involved',
      subtitle: 'Whether you’re starting your career, looking back on one, or supporting the next generation, there’s a place for you at Ruyi.',
    },
    mentees: {
      title: 'Find a Mentor',
      subtitle: 'For young adults ages 18–30',
      whoTitle: 'Who should apply',
      who: [
        'College students exploring career options',
        'Recent graduates entering the workforce',
        'Young professionals seeking career advancement',
        'Career changers exploring new industries',
        'International students navigating the U.S. job market',
        'First-generation college students building professional networks',
      ],
      scholarshipTitle: 'Scholarship eligibility',
      scholarship: [
        'Household income at or below 200% of the federal poverty level',
        'Meet the standard program eligibility requirements',
        'U.S. resident (citizen, permanent resident, or documented immigrant)',
        'Commitment to actively participate',
      ],
      docsTitle: 'Accepted income documents (any one)',
      docs: [
        'Most recent federal tax return (Form 1040)',
        'Pay stubs from the last 3 months, or an employer letter',
        'Social Security or unemployment benefits statement',
        'SNAP, WIC, or Medicaid eligibility letter',
      ],
      privacyNote: 'Scholarship status is kept confidential and is never shared with mentors.',
      cta: 'Apply as a participant',
    },
    mentors: {
      title: 'Become a Mentor',
      subtitle: 'For retired professionals and experienced industry experts',
      message: 'Share your expertise. Shape the next generation.',
      qualTitle: 'What we look for',
      qualifications: [
        'At least 10 years of professional experience',
        'Strong communication and listening skills',
        'Commitment to diversity, equity, and inclusion',
        'Willingness to complete a background check and orientation',
        'Agreement to maintain confidentiality',
      ],
      experienceTitle: 'Experiences participants ask about',
      experiences: [
        'First-time management', 'Hiring', 'Entrepreneurship', 'Career change', 'Burnout', 'Layoffs',
        'Difficult workplace relationships', 'Leadership', 'Retirement transition', 'Learning from mistakes',
      ],
      trainingTitle: 'Orientation covers',
      training: [
        'Ruyi’s mission, values, and program overview',
        'Effective mentoring and listening',
        'Cultural competence and sensitivity',
        'Boundaries, ethics, and confidentiality',
        'Using our video and scheduling tools',
      ],
      commitment: 'Flexible, limited commitment. You set your availability. Mentors volunteer their time.',
      cta: 'Apply as a mentor',
    },
    organizations: {
      title: 'For Organizations',
      subtitle: 'Universities, employers, community groups, and affinity organizations',
      text: 'Give your students, members, or employees curated access to experienced mentors. Group plans include onboarding, matching, and scheduling support.',
      waysTitle: 'Ways to partner',
      ways: [
        { title: 'Group access', text: 'Purchase access for a cohort of participants. Pilot plans start at $1,500 for up to 25 participants for 6 months.' },
        { title: 'Corporate volunteering', text: 'Encourage your retirees and alumni networks to give back as Ruyi mentors.' },
        { title: 'Sponsorship', text: 'Sponsor scholarships or an entire cohort for an underserved community.' },
      ],
      cta: 'Talk with us about a partnership',
    },
  },

  about: {
    title: 'About Us',
    description:
      'Learn about Ruyi Global Foundation’s mission, values, history, Board of Directors, and 501(c)(3) status.',
    hero: {
      title: 'About Ruyi Global Foundation',
      subtitle: '如意 (Ruyi) means “as you wish.” We want every young person to have the guidance to pursue the future they hope for.',
    },
    mission: { title: 'Mission', text: 'To empower youth and young adults through transformative educational mentorship that bridges cultural divides, fosters academic excellence, and accelerates career development.' },
    vision: { title: 'Vision', text: 'A world where every young person, regardless of background or circumstance, has access to mentorship that unlocks their potential and creates pathways to success.' },
    values: {
      title: 'Core values',
      items: [
        { title: 'Accessibility', text: 'Mentorship available to all, regardless of financial means.' },
        { title: 'Excellence', text: 'High standards for mentors, program delivery, and outcomes.' },
        { title: 'Cultural Competence', text: 'We celebrate diversity and design culturally responsive programs.' },
        { title: 'Sustainability', text: 'Programs that sustain themselves while staying accessible.' },
        { title: 'Empowerment', text: 'Building confidence, skills, and networks for independent success.' },
        { title: 'Integrity', text: 'Transparency, accountability, and ethical standards.' },
      ],
    },
    purposes: {
      title: 'Our charitable purposes',
      intro: 'As stated in our Bylaws, Ruyi is organized exclusively for charitable and educational purposes, including:',
      points: [
        'Providing charitable educational programs promoting cultural exchange',
        'Supporting underprivileged communities through scholarships and educational resources',
        'Supporting community development initiatives that foster global understanding and educational opportunity',
      ],
    },
    history: {
      title: 'Our journey',
      items: [
        { date: 'June 14, 2026', text: 'Incorporated as a California nonprofit public benefit corporation' },
        { date: 'August 4, 2026', text: 'Recognized by the IRS as a 501(c)(3) tax-exempt organization' },
        { date: 'September 2026', text: 'Bylaws adopted by the Board; California state tax exemption filed' },
        { date: 'October–November 2026', text: 'Program development, mentor recruitment, and website launch' },
        { date: 'December 2026', text: 'Retiree Mentorship Network pilot begins' },
        { date: '2028', text: 'Planned launch of the Youth Academic & Cultural Mentorship program' },
      ],
    },
    board: {
      title: 'Board of Directors',
      roles: { chair: 'Board Chair', viceChair: 'Vice Chair', secretary: 'Secretary', director: 'Director' },
    },
    governance: {
      title: 'Governance & accountability',
      points: [
        'Directors serve without compensation',
        'The Board meets at least quarterly',
        'Annual conflict-of-interest disclosure by every director and officer',
        'An annual report on activities and financial condition',
        'Federal and California returns filed each year (IRS Form 990, CA Form 199)',
        'We do not discriminate on the basis of race, color, religion, sex, national origin, age, disability, or any other protected characteristic',
      ],
    },
    legal: {
      title: 'Organization facts',
      rows: [
        { label: 'Legal name', value: 'Ruyi Global Foundation (如意基金會)' },
        { label: 'Legal structure', value: 'California Nonprofit Public Benefit Corporation' },
        { label: 'Federal tax status', value: '501(c)(3) tax-exempt organization' },
        { label: 'EIN', value: '42-3267051' },
      ],
    },
  },

  donate: {
    title: 'Donate',
    description:
      'Support Ruyi Global Foundation, a 501(c)(3) nonprofit (EIN 42-3267051). Give with Zelle to fund mentorship scholarships for young adults.',
    hero: {
      title: 'Support Our Mission',
      subtitle: 'Your gift helps a young person learn from someone who has walked the path before them.',
    },
    impact: {
      title: 'What your gift can do',
      note: 'Examples are based on our pilot pricing.',
      items: [
        { amount: '$25', text: 'Gives one young adult a 30-day trial, including a mentor conversation' },
        { amount: '$120', text: 'Funds a full year of mentorship access for one young adult' },
        { amount: '$1,500', text: 'Sponsors up to 25 participants from an underserved community for 6 months' },
        { amount: '$3,000', text: 'Sponsors up to 50 participants for a full year' },
      ],
    },
    supports: {
      title: 'Your donation supports',
      points: ['Need-based scholarships', 'Mentor screening and background checks', 'Mentor orientation and training', 'Matching, scheduling, and quality monitoring', 'Development of the 2028 youth program'],
    },
    zelle: {
      title: 'Give with Zelle®',
      steps: [
        'Open your banking app and go to Zelle®',
        'Choose to send money and scan the QR code',
        'Confirm the recipient is “RUYI GLOBAL FOUNDATION”',
        'Enter your amount and send',
      ],
      alt: 'Zelle QR code for donations to Ruyi Global Foundation',
      receipt: 'For a donation receipt, email us your name, the amount, and the date of your gift.',
    },
    tax: {
      title: 'Tax deductibility',
      text: 'Ruyi Global Foundation is a 501(c)(3) tax-exempt organization (EIN 42-3267051). Contributions are tax-deductible to the extent allowed by law.',
    },
    corporate: {
      title: 'Corporate giving & sponsorship',
      text: 'Companies can sponsor scholarships or a cohort, match employee gifts, or contribute in-kind support such as software or professional services. We’d love to talk.',
      cta: 'Contact us about sponsorship',
    },
  },

  contact: {
    title: 'Contact',
    description: 'Contact Ruyi Global Foundation about mentorship, partnerships, or donations.',
    hero: { title: 'Contact Us', subtitle: 'Questions about mentoring, partnering, or giving? We’d love to hear from you.' },
    emailTitle: 'Email',
    formCta: 'Send us a message',
  },

  privacy: {
    title: 'Privacy Policy',
    description: 'How Ruyi Global Foundation collects, uses, and protects personal information.',
    effective: 'Effective October 2026',
    sections: [
      { title: 'Information we collect', body: ['We collect only the information needed to run our programs: contact details, age and education level, goals and interests, availability, and, for scholarship applicants, income verification documents.'] },
      { title: 'How we use it', body: ['To review applications, match participants with mentors, schedule conversations, process payments, verify scholarships, and improve program quality through feedback.'] },
      { title: 'What we never do', body: ['We do not sell personal information. We do not share personal information with third parties except service providers needed to operate the program (for example, payment processing).'] },
      { title: 'Security', body: ['Data is stored in password-protected systems with two-factor authentication for administrators and limited staff access. Payments are processed by PCI-compliant providers. We keep regular backups.'] },
      { title: 'Retention', body: ['Financial records are kept for 7 years and program records for 3 years, then securely deleted.'] },
      { title: 'Your rights (CCPA)', body: ['Under the California Consumer Privacy Act, you may request access to your data, ask us to delete it, or opt out of data sharing. Email us to make a request.'] },
    ],
  },
};

export type Content = typeof en;
export default en;
