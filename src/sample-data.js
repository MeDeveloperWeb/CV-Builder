export { personalInfo, eduInfo, skills, interests, experience };

const personalInfo = {
  name: 'Alta Parks',
  niche: 'Attorney',
  mobile: '718 555 0100',
  email: 'alta@example.com',
  website: 'interestingsite.com',
  address: 'Brooklyn, New York 48127',
  profile:
    'Dynamic and detail-oriented attorney with extensive experience in business and real estate affairs. Specializing in business formation, real estate transactions, distressed property management, due diligence, permitting, and contract negotiations. Proficient in landlord/tenant matters.'
};

const eduInfo = [
  {
    id: 'd3f35d52-03c7-4fbb-a361-16b2f0c7a60e',
    degree: 'Juris Doctor',
    institution: 'Jasper University',
    start: 'June 2020',
    end: 'Present'
  },
  {
    id: '4d88d054-8ddc-4ba7-868a-a52ea9fce95f',
    degree: 'BA in Political science',
    institution: 'Mount Flores College',
    start: 'August 2016',
    end: 'June 2020'
  }
];

const skills = [
  'Data analytics',
  'Records search',
  'Legal writing',
  'Excellent communication',
  'Organization'
];

const interests = [
  'Literature',
  'Environmental conservation',
  'Art',
  'Yoga',
  'Skiing',
  'Travel'
];

const experience = [
  {
    id: '8f057158-b764-4e30-92da-ab450b4f0044',
    start: 'March 2018',
    end: 'Present',
    firm: 'Bandter Real Estate',
    address: 'NYC, New York',
    position: 'In-House Counsel',
    job_details: [
      'Draft, negotiate, and enforce leases and purchase & sale agreements.',
      'Handle landlord tenant issues, including leasing, eviction, and dispute resolution.',
      'Oversee due diligence on potential real estate purchase opportunities.',
      'Work with outside counsel on litigation, permitting, and other specialized firm-related legal matters.'
    ]
  },
  {
    id: '34d4b30a-1455-42ca-8494-c97f82e6b3c2',
    start: 'Feb 2016',
    end: 'Nov 2018',
    firm: 'Luca Udinesi Law firm',
    address: 'NYC, New York',
    position: 'Associate Attorney',
    job_details: [
      'Represented and advised parties on small business, real estate, and landlord tenant issues.',
      'Researched and analyzed a wide range of legal issues.',
      'Represented client in a corporate dissolution litigation and won a $25,000 supervised receivership and dissolution of corporation.'
    ]
  },
  {
    id: '31c3e248-1fb3-43dd-a4df-c536ca83fe8c',
    start: 'Sept 2014',
    end: 'Jan 2016',
    firm: 'Law Offices of Keita Aoki',
    address: 'NYC, New York',
    position: 'Junior Associate Attorney',
    job_details: [
      'Researched legal issues for senior counsel and assisted in representation of clients on a range of small business.',
      'Drafted legal memoranda.',
      'Second chair in a multi-million-dollar telecom litigation.'
    ]
  }
];
