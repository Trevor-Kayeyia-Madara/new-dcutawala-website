import type {
  Article,
  ChurchEvent,
  Department,
  ExternalLinks,
  GivingMethod,
  Leader,
  Ministry,
  NavItem,
  SchoolInfo,
  Sermon,
  Service,
  SiteConfig,
  WorshipTeam,
} from "./types";

/**
 * Authenticity rule: nothing is invented. Any field the church has not
 * confirmed stays undefined and renders as the placeholder below.
 */
export const TBC = "[CONTENT TO BE CONFIRMED BY DC UTAWALA]";

export const siteConfig: SiteConfig = {
  churchName: "Deliverance Church Int'l - Utawala",
  displayName: "Deliverance Church Utawala",
  shortName: "DC Utawala",
  tagline: "The Church of Choice",
  mission: "To Equip Mankind For The Mission Of God.",
  missionSupport:
    "We believe every believer is called to participate in God's great commission. Our mission is to equip individuals with the tools, knowledge, and spiritual foundation needed to fulfill their calling in ministry and daily life.",
  vision:
    "The Apostolic Church Of Choice transforming & empowering mankind in Africa and beyond.",
  visionSupport:
    "We envision a church that serves as a beacon of hope, transformation, and empowerment across Africa and the nations. Through excellence in worship, teaching, and service, we aim to be the church of choice for families seeking spiritual growth.",
  address: {
    line1: "Utawala Road",
    line2: "Utawala, Nairobi, Kenya",
    full: "Utawala Road, Utawala, Nairobi, Kenya",
  },
  phone: "+254 723 102 273",
  phoneHref: "+254723102273",
  email: "info@dcutawala.org",
  leadPastors: "Rev. Emmanuel & Lucy Kokonyo",
  logo: "/logo-512.png",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Services", href: "/services" },
  { label: "Leadership", href: "/leadership" },
  { label: "School", href: "/school" },
  { label: "Resources", href: "/resources" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    slug: "sunday-first-service",
    name: "Sunday First Service",
    day: "Sunday",
    time: "6:30 AM – 9:00 AM",
  },
  {
    slug: "sunday-second-service",
    name: "Sunday Second Service",
    day: "Sunday",
    time: "9:30 AM – 12:00 PM",
  },
  {
    slug: "tuesday-fellowship",
    name: "Tuesday Fellowship",
    day: "Tuesday",
    time: "6:30 PM",
  },
  {
    slug: "wednesday-anchored-service",
    name: "Wednesday Anchored Service",
    day: "Wednesday",
    time: "6:30 PM – 8:00 PM",
  },
  {
    slug: "friday-ignite-service",
    name: "Friday Ignite Service",
    day: "Friday",
    time: "6:30 PM – 8:00 PM",
  },
];

export const ministries: Ministry[] = [
  {
    slug: "eagles",
    name: "Eagles",
    subtitle: "Men's Ministry",
    summary: "A brotherhood helping men grow in faith, character and responsibility.",
    purpose: "To build men who follow Christ, lead with integrity and serve their families and community.",
    serves: "Men of all ages at Deliverance Church Utawala.",
    schedule: "Every 3rd Sunday at 2:00 PM · Castle of Kings",
    activities: ["Men's fellowship", "Prayer and Bible study", "Mentorship", "Community outreach"],
  },
  {
    slug: "daughters-of-faith",
    name: "Daughters of Faith",
    subtitle: "Women's Ministry",
    summary: "A sisterhood helping women grow in faith, purpose and service.",
    purpose: "To encourage women to know Christ deeply, grow together and serve with grace and courage.",
    serves: "Women and girls connected to Deliverance Church Utawala.",
    activities: ["Women's fellowship", "Prayer and Bible study", "Mentorship", "Care and community service"],
  },
  {
    slug: "sunday-school",
    name: "Sunday School",
    subtitle: "Children's Ministry",
    ageGroup: "Children attending school",
    summary: "A safe and joyful ministry helping children attending school learn and live out the Word of God.",
    purpose: "To help children know Jesus, grow in faith and build a strong spiritual foundation.",
    serves: "Children attending school.",
    activities: ["Age-appropriate Bible teaching", "Prayer and worship", "Bible memory", "Fellowship and care"],
  },
  {
    slug: "young-adults",
    name: "Young Adults",
    subtitle: "Teenagers Ministry",
    ageGroup: "Teenagers",
    summary: "A ministry where teenagers grow in faith, identity and community with Christ at the centre.",
    purpose: "To guide teenagers to follow Christ confidently and navigate school, relationships and purpose with wisdom.",
    serves: "Teenagers.",
    activities: ["Teenage fellowship", "Bible teaching", "Prayer and worship", "Mentorship and life conversations"],
  },
  {
    slug: "legacy",
    name: "Legacy",
    subtitle: "23+ Ministry",
    ageGroup: "Ages 23 and above",
    summary: "A community for adults aged 23 and above to grow, connect and build a lasting legacy in Christ.",
    purpose: "To help adults grow in Christ and live faithfully in family, work, church and society.",
    serves: "Adults aged 23 and above.",
    activities: ["Fellowship", "Bible study and prayer", "Mentorship", "Community and family support"],
  },
  {
    slug: "outreach",
    name: "Outreach",
    subtitle: "Evangelism & Outreach",
    summary: "Evangelism and outreach beyond the walls of the church.",
    purpose: "To share the gospel and demonstrate the love of Christ through practical service and evangelism.",
    serves: "People and communities beyond the church.",
    activities: ["Evangelism", "Community visits", "Prayer outreach", "Practical acts of service"],
  },
  {
    slug: "micro-churches",
    name: "Micro-Churches",
    subtitle: "Fellowships / Small Groups",
    summary: "Fellowships and small groups across the community.",
    purpose: "To create small communities where believers can belong, grow, pray and care for one another.",
    serves: "Members and neighbours connected to local fellowships.",
    activities: ["Home fellowships", "Bible study", "Prayer and pastoral care", "Community connection"],
  },
  {
    slug: "discipleship",
    name: "Discipleship",
    subtitle: "Spiritual Growth & Discipleship",
    summary: "Spiritual growth and discipleship for every believer.",
  },
];

export const worshipTeams: WorshipTeam[] = [
  { slug: "the-fountain", name: "The Fountain", role: "Main Choir" },
  { slug: "tehille", name: "Tehille" },
  { slug: "eagles-choir", name: "Eagles Choir" },
  { slug: "redemption-choir", name: "Redemption Choir" },
  { slug: "sifa-band", name: "Sifa Band" },
];

export const departments: Department[] = [
  {
    slug: "media-technical",
    name: "Media & Technical",
    summary: "Church media and technical operations.",
  },
  { slug: "security", name: "Security", summary: "Church safety and security." },
  {
    slug: "ushering",
    name: "Ushering",
    summary: "Welcoming, seating and assisting members and visitors.",
  },
  {
    slug: "protocol",
    name: "Protocol",
    summary: "Order, official guests and special church functions.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    summary: "Welcoming and caring for members and guests.",
  },
  {
    slug: "counselling",
    name: "Counselling",
    summary: "Counselling, spiritual guidance and care.",
  },
  {
    slug: "cleaning-team",
    name: "Cleaning Team",
    summary: "Church cleanliness, preparation and maintenance.",
  },
];

export const leaders: Leader[] = [
  {
    slug: "emmanuel-lucy-kokonyo",
    name: "Rev. Emmanuel & Lucy Kokonyo",
    role: "Lead Pastors",
    photo: "/photos/lead-pastor-1200.jpg",
  },
];

/**
 * Welcome message attributed to the Senior Pastor. Sample copy only:
 * while isSample is true, pages must show a marker noting it awaits
 * the Senior Pastor's own words.
 */
export const pastorWelcome = {
  author: "Rev. Emmanuel Kokonyo",
  role: "Senior Pastor",
  isSample: false,
  paragraphs: [
    "Welcome to Deliverance Church Int'l - Utawala. Whether you have walked with the Lord for many years or are taking your first step towards Him, there is a place for you in our family here on Utawala Road.",
    "We are a church built around one calling: to equip mankind for the mission of God. Every service, every ministry and every fellowship exists to help you know Christ deeply, grow in His Word, and carry His love into your home, your work and our nation.",
    "Come as you are — bring your family, your questions and your story. It would be my joy to welcome you personally and to pray with you. You are not a visitor here for long; you are family from the moment you step in.",
  ],
};

/** Church history confirmed by DC Utawala. */
export const churchJourney: {
  lede: string;
  milestones: { phase: string; title: string; body: string }[];
  lookingForward: string;
  pillars: { index: string; title: string; body: string }[];
} = {
  lede: "The story of how God has led us to where we are — and where He's taking us next.",
  milestones: [
    {
      phase: "Foundation",
      title: "A Humble Beginning",
      body: "In 2009, Deliverance Church Utawala was planted with a vision to reach the Utawala community and beyond with the transformative power of the gospel — a small congregation gathering at the Utawala shopping centre under a mabati (iron-sheet) structure.",
    },
    {
      phase: "Growth",
      title: "Building Community",
      body: "In 2010 the church moved to our current location on Utawala Road. From a small gathering we grew into a vibrant community of believers, establishing key ministries to serve different demographics.",
    },
    {
      phase: "Expansion",
      title: "Reaching More Souls",
      body: "We launched outreach programs, community services, and the church school to impact the wider community and disciple the next generation. God's faithfulness has carried us from iron sheets to an auditorium that seats more than 1,500 worshippers.",
    },
    {
      phase: "Present",
      title: "Transforming Nations",
      body: "Today, we continue to equip believers for the mission of God, expanding our vision to transform and empower Africa and beyond.",
    },
  ],
  lookingForward:
    "We believe the best is yet to come. Join us as we continue our journey of faith and transformation.",
  pillars: [
    { index: "01", title: "Discipleship", body: "Raising up mature believers" },
    { index: "02", title: "Expansion", body: "Reaching new communities" },
    { index: "03", title: "Impact", body: "Transforming nations for Christ" },
  ],
};

/** Published sermons. Empty until DC Utawala supplies messages. */
export const sermons: Sermon[] = [];

/** Published articles. Empty until DC Utawala supplies writings. */
export const articles: Article[] = [];

/** Published events. Empty until DC Utawala supplies events. */
export const events: ChurchEvent[] = [];

export const givingMethods: GivingMethod[] = [
  {
    slug: "tithes",
    name: "Tithes",
    description:
      "Your regular tithe offering to support the church ministry and operations.",
    scripture: "Bring the whole tithe into the storehouse...",
    scriptureReference: "Malachi 3:10",
  },
  {
    slug: "offerings",
    name: "Offerings",
    description:
      "These go a long way to support various church programs and activities.",
    scripture:
      "Each of you should give what you have decided in your heart to give...",
    scriptureReference: "2 Corinthians 9:7",
  },
];

export const mpesaPaybill = {
  method: "M-Pesa",
  paybill: "4043891",
  account: "Your Name and Purpose",
};

export const school: SchoolInfo = {
  name: "Dominion Center",
};

export const externalLinks: ExternalLinks = {
  youtube: "",
  facebook: "",
  instagram: "",
  whatsapp: "",
  maps: "https://www.google.com/maps/search/?api=1&query=Deliverance+Church+Utawala+Road+Utawala+Nairobi+Kenya",
  giving: "",
};

export const socialLinks = [
  { label: "YouTube", href: externalLinks.youtube },
  { label: "Facebook", href: externalLinks.facebook },
  { label: "Instagram", href: externalLinks.instagram },
  { label: "WhatsApp", href: externalLinks.whatsapp },
].filter((link) => link.href.length > 0);

/**
 * Real DC Utawala photography. Save files in /public/photos/ and set the
 * matching path here (e.g. congregation: "/photos/congregation.jpg").
 * While a value is empty, brand-art panels are shown instead.
 */
export const photos = {
  congregation: "/photos/congregation-1600.jpg",
  leadPastor: "/photos/lead-pastor-1200.jpg",
  school: "",
};
