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

export interface Project {
  id: string;
  title: string;
  description: string;
  type: "web" | "mobile" | "desktop" | "other";
  order: number;
  duration: string;
  technologies: string[];
  keyFeatures: string[];
  challenges: string[];
  keyLearnings: string[];
  gallery: string[]; // Array of image URLs
  videos?: string[]; // Array of video URLs (YouTube, Vimeo, etc.)
  github?: string;
  projectLink?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
