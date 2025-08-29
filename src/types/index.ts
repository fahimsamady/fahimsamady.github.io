export interface Profile {
  image: string | Blob | undefined;
  name: string;
  profilePicture: string;
  about: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  CV: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  description: string;
  achievements: string[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

// SKILLS

export interface Skill {
  name: string;
  icon: string;
}

export interface Skills {
  software: Skill[];
  expertise: Skill[];
  language: Skill[];
}

// PROJECTS

export interface ProjectSummary {
  id: string;
  title: string;
  shortDescription: string;
  type: "web" | "mobile" | "ai" | "blockchain" | "desktop";
  category: string;
  technologies: string[];
  image: string;
  featured: boolean;
  completionDate: string;
}

export interface ProjectDetail extends Omit<ProjectSummary, "technologies"> {
  duration: string;
  teamSize: number;
  role: string;
  heroImage: string;
  gallery: string[];
  video?: string;
  longDescription: string;
  technologies: {
    frontend?: string[];
    backend?: string[];
    payment?: string[];
    deployment?: string[];
    testing?: string[];
    ai?: string[];
    authentication?: string[];
    notifications?: string[];
    analytics?: string[];
    monitoring?: string[];
  };
  keyFeatures: string[];
  challenges: string[];
  solutions: string[];
  keyLearnings: string[];
  metrics: Record<string, string>;
  github?: string;
  liveDemo?: string;
  caseStudy?: string;
  appStore?: string;
  playStore?: string;
  demo?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
