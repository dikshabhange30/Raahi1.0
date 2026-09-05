export const CITIES = [
  { id: 'bengaluru', name: 'Bengaluru', state: 'Karnataka', icon: '🏙️' },
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', icon: '🌊' },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', icon: '⛰️' },
  { id: 'delhi', name: 'Delhi NCR', state: 'Delhi', icon: '🏛️' },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', icon: '🏰' },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', icon: '🏖️' }
];

export const LANGUAGES = [
  { id: 'marathi', name: 'Marathi (मराठी)', native: 'मराठी' },
  { id: 'hindi', name: 'Hindi (हिंदी)', native: 'हिंदी' },
  { id: 'kannada', name: 'Kannada (ಕನ್ನಡ)', native: 'ಕನ್ನಡ' },
  { id: 'tamil', name: 'Tamil (தமிழ்)', native: 'தமிழ்' },
  { id: 'telugu', name: 'Telugu (తెలుగు)', native: 'తెలుగు' },
  { id: 'english', name: 'English', native: 'English' },
  { id: 'bengali', name: 'Bengali (বাংলা)', native: 'বাংলা' },
  { id: 'malayalam', name: 'Malayalam (മലയാളം)', native: 'മലയാളം' },
  { id: 'gujarati', name: 'Gujarati (ગુજરાતી)', native: 'ગુજરાતી' }
];

export const MOCK_COMMUNITY_GROUPS = [
  {
    id: 'grp_blr_mar_f',
    cityId: 'bengaluru',
    languageId: 'marathi',
    languageName: 'Marathi',
    genderPolicy: 'female', // female, male, unisex
    name: 'Bengaluru Marathi Women Companion',
    description: 'Safe haven for Marathi women newly moved to Bengaluru. Home food tips, PG recommendations, and local language learning.',
    membersCount: 428,
    activeOnlineCount: 34,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    tags: ['Housing', 'Home Tiffin', 'Safe Travels'],
    rules: [
      'Women-only group for privacy & safety',
      'No spamming or unwanted marketing',
      'Be respectful and helpful to all newcomers'
    ]
  },
  {
    id: 'grp_blr_mar_m',
    cityId: 'bengaluru',
    languageId: 'marathi',
    languageName: 'Marathi',
    genderPolicy: 'male',
    name: 'Bengaluru Marathi Brothers Network',
    description: 'A community of Marathi guys sharing flats, local commute tips, language helpers, and weekend hangouts.',
    membersCount: 612,
    activeOnlineCount: 52,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    tags: ['Flat Share', 'Weekend Hangouts', 'Commute'],
    rules: ['Male members community', 'Help newcomers find affordable accommodation', 'Respect privacy']
  },
  {
    id: 'grp_blr_mar_u',
    cityId: 'bengaluru',
    languageId: 'marathi',
    languageName: 'Marathi',
    genderPolicy: 'unisex',
    name: 'Bengaluru Marathi Family & Friends (Unisex)',
    description: 'Open to everyone speaking Marathi in Bengaluru! Festivals, cultural meetups, emergency medical help, and local guidance.',
    membersCount: 1240,
    activeOnlineCount: 108,
    avatar: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80',
    tags: ['Festivals', 'General Guidance', 'Emergency'],
    rules: ['Inclusive community for all genders', 'Strict reporting of harassment', 'Share authentic local advice']
  },
  {
    id: 'grp_blr_hin_f',
    cityId: 'bengaluru',
    languageId: 'hindi',
    languageName: 'Hindi',
    genderPolicy: 'female',
    name: 'Bengaluru Hindi Sakhi Circle',
    description: 'Empowering Hindi speaking women in Namma Bengaluru. Safe PG suggestions, cooking buddies, and Kannada phrase guides!',
    membersCount: 890,
    activeOnlineCount: 67,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    tags: ['Kannada Phrases', 'PG Reviews', 'Safety'],
    rules: ['Women-only support circle', 'Encourage learning basic Kannada', 'Zero tolerance for spam']
  },
  {
    id: 'grp_blr_eng_u',
    cityId: 'bengaluru',
    languageId: 'english',
    languageName: 'English',
    genderPolicy: 'unisex',
    name: 'Bengaluru Relocation & Language Bridge (Unisex)',
    description: 'Global and inter-state relocation support for English speakers. Navigating BMTC buses, Namma Metro, auto fares & local culture.',
    membersCount: 2150,
    activeOnlineCount: 184,
    avatar: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=80',
    tags: ['Transit', 'Language Basics', 'Work Cafes'],
    rules: ['English primary language', 'Friendly support for international & domestic migrants']
  },
  {
    id: 'grp_pune_mar_u',
    cityId: 'pune',
    languageId: 'marathi',
    languageName: 'Marathi',
    genderPolicy: 'unisex',
    name: 'Pune Cultural & Student Nest (Unisex)',
    description: 'For anyone settling in Pune for studies or IT jobs. Rent contracts, mess details, and local spots.',
    membersCount: 940,
    activeOnlineCount: 79,
    avatar: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
    tags: ['Student Life', 'IT Hubs', 'Food Mess'],
    rules: ['Respectful discussions', 'Verified local recommendations']
  }
];

export const MOCK_GROUP_MESSAGES = {
  'grp_blr_mar_f': [
    {
      id: 'm1',
      senderId: 'usr_ananya',
      senderName: 'Ananya Deshmukh',
      senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      senderRole: 'Local Helper (3 yrs in BLR)',
      gender: 'female',
      text: 'Namaskar Tai! Anyone looking for authentic home-cooked Maharashtrian Tiffin near HSR Layout 2nd Sector? A lovely auntie just started her service.',
      timestamp: '10:15 AM',
      likes: 12
    },
    {
      id: 'm2',
      senderId: 'usr_priya',
      senderName: 'Priya Joshi',
      senderAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      senderRole: 'Newcomer (1 week)',
      gender: 'female',
      text: 'Hi Ananya! Oh wow yes! I just moved to Bellandur last Sunday and really missing home Puran Poli. Does she deliver via Dunzo?',
      timestamp: '10:18 AM',
      likes: 5
    },
    {
      id: 'm3',
      senderId: 'usr_swati',
      senderName: 'Swati Kulkarni',
      senderAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      senderRole: 'Local Helper (5 yrs)',
      gender: 'female',
      text: 'Yes Priya! Also if you need help understanding basic Kannada words for auto drivers (like "Swalpa Mundhe Hogi" = go a bit ahead), I made a quick cheat-sheet!',
      timestamp: '10:22 AM',
      likes: 18
    }
  ],
  'grp_blr_mar_m': [
    {
      id: 'm10',
      senderId: 'usr_rohit',
      senderName: 'Rohit Patil',
      senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      senderRole: 'Local Helper (4 yrs)',
      gender: 'male',
      text: 'Hey guys, 1 BHK available in BTM 1st Stage. Rent is 15k, deposit 50k. Owner is super chill. Prefer Marathi working professional.',
      timestamp: '09:40 AM',
      likes: 8
    }
  ]
};

export const MOCK_PARTNERS = [
  {
    id: 'p1',
    category: 'pg',
    name: 'Suhana Home PG & Co-Living',
    city: 'Bengaluru',
    area: 'Indiranagar & HSR Layout',
    price: '₹9,500 - ₹16,000 / mo',
    rating: 4.8,
    reviewsCount: 124,
    tags: ['Safe Women & Men Wings', 'Home Style Meals', 'High Speed Wi-Fi', 'Daily Cleaning'],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
    description: 'Thoughtfully managed co-living space with regional meal choices (North & West Indian options), 24/7 biometric security, and warm community lounge.'
  },
  {
    id: 'p2',
    category: 'food',
    name: 'Ghar Se Tiffin & Daily Mess',
    city: 'Bengaluru',
    area: 'Koramangala, BTM & Bellandur',
    price: '₹2,800 / month (2 meals)',
    rating: 4.9,
    reviewsCount: 310,
    tags: ['Authentic Regional Spices', 'Less Oil', 'Warm Steel Tiffin Boxes'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    description: 'Fresh home-cooked meals prepared by experienced local home chefs. Choose your region (Maharashtra, North India, South India special).'
  },
  {
    id: 'p3',
    category: 'pg',
    name: 'NestAway Verified Stays',
    city: 'Mumbai',
    area: 'Andheri West & Powai',
    price: '₹14,000 - ₹22,000 / mo',
    rating: 4.6,
    reviewsCount: 88,
    tags: ['Zero Brokerage', 'Fully Furnished', 'Near Local Train Station'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80',
    description: 'Spacious furnished apartments with verified flatmates, attached washrooms, and easy access to Mumbai local train stations.'
  },
  {
    id: 'p4',
    category: 'food',
    name: 'Annapurna Homely Dining',
    city: 'Pune',
    area: 'Viman Nagar & Hinjewadi',
    price: '₹2,500 / month',
    rating: 4.9,
    reviewsCount: 205,
    tags: ['Unlimited Thali', 'Clean Kitchen', 'Student Discount'],
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80',
    description: 'Loved by IT employees & college students. Fresh bhakri, chapati, dal, sabzi, and weekend sweet treats.'
  }
];

export const MOCK_NOTIFICATIONS = [
  {
    id: 'n1',
    title: 'Welcome to Raahi! 🧭',
    message: 'Your city companion is active. Join community groups matching your native language to get started.',
    time: 'Just now',
    read: false
  },
  {
    id: 'n2',
    title: 'Safety Tip for Newcomers',
    message: 'Remember: Your gender selection is locked to ensure group safety & privacy for everyone.',
    time: '2 hours ago',
    read: false
  },
  {
    id: 'n3',
    title: 'Swati Kulkarni replied to a group chat',
    message: 'Check out the new message in Bengaluru Marathi Women Companion.',
    time: 'Yesterday',
    read: true
  }
];
