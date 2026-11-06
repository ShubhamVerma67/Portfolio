export type ProjectCategory =
  | "All"
  | "Branding & Logo Design"
  | "Social Media Creatives"
  | "Poster & Flyer Design"
  | "Packaging Design"
  | "Editorial & Book Cover Design"
  | "T-Shirt & Merchandise Design"
  | "Digital Marketing Creatives"
  | "Print Design";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  client: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  tools: string[];
  image: string;
  gallery?: string[];
  featured?: boolean;
  colorPalette?: string[];
  metrics?: { label: string; value: string };
  specs?: string;
}

export interface Experience {
  id: string;
  company: string;
  period: string;
  dateRange: string;
  role: string;
  location?: string;
  summary: string;
  responsibilities: {
    title: string;
    items: string[];
  }[];
  tools: string[];
  accentColor: string;
}

export interface FreelanceProject {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  deliverables: string[];
  tag: string;
}

export interface Skill {
  id: string;
  name: string;
  code: string;
  category: "Creative Suite" | "Vector & Layout" | "Motion & Video";
  proficiency: number;
  years: string;
  brandColor: string;
  bgTint: string;
  description: string;
  specialties: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  type: string;
  description: string;
  courses: string[];
  status: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  subtitle: string;
  experienceYears: string;
  phone: string;
  email: string;
  address: string;
  locationDetails: string;
  bioSummary: string;
  fullBio: string[];
  socials: {
    name: string;
    url: string;
    icon: string;
  }[];
}
