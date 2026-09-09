export interface SiteConfig {
  churchName: string;
  displayName: string;
  shortName: string;
  tagline: string;
  mission: string;
  missionSupport: string;
  vision: string;
  visionSupport: string;
  address: {
    line1: string;
    line2: string;
    full: string;
  };
  phone: string;
  phoneHref: string;
  email: string;
  leadPastors: string;
  logo: string;
}

export interface Service {
  slug: string;
  name: string;
  day: string;
  time: string;
  description?: string;
}

export interface Ministry {
  slug: string;
  name: string;
  subtitle: string;
  ageGroup?: string;
  summary: string;
  image?: string;
  gallery?: { src: string; alt: string }[];
  purpose?: string;
  serves?: string;
  leadership?: string;
  schedule?: string;
  activities?: string[];
}

export interface Department {
  slug: string;
  name: string;
  summary: string;
  areas?: string[];
}

export interface WorshipTeam {
  slug: string;
  name: string;
  role?: string;
}

export interface Leader {
  slug: string;
  name: string;
  role: string;
  photo?: string;
  biography?: string;
  responsibility?: string;
}

export interface Sermon {
  slug: string;
  title: string;
  speaker: string;
  date: string;
  series?: string;
  topic?: string;
  thumbnail?: string;
  youtubeId?: string;
  summary?: string;
}

export interface Article {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content?: string;
}

export interface ChurchEvent {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  registration?: string;
  contact?: string;
  status: "upcoming" | "ongoing" | "past";
}

export interface GivingMethod {
  slug: string;
  name: string;
  description: string;
  scripture: string;
  scriptureReference: string;
}

export interface SchoolInfo {
  name: string;
  about?: string;
  vision?: string;
  mission?: string;
  programs?: string[];
  admissions?: string;
  leadership?: string;
  facilities?: string[];
  faqs?: { question: string; answer: string }[];
}

export interface ExternalLinks {
  youtube: string;
  facebook: string;
  instagram: string;
  whatsapp: string;
  maps: string;
  giving: string;
}

export interface NavItem {
  label: string;
  href: string;
}
