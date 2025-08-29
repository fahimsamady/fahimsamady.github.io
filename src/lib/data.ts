import profileData from "@/data/profile.json";
import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";
import skillsData from "@/data/skills.json";
import projectsData from "@/data/projects";

import { Profile, Education, Experience, Skills, Project } from "@/types";

export function getProfile(): Profile {
  return profileData as Profile;
}

export function getEducation(): Education[] {
  return educationData as Education[];
}

export function getExperience(): Experience[] {
  return experienceData as Experience[];
}

export function getSkills(): Skills {
  return skillsData as Skills;
}

export function getProjects(): Project[] {
  return projectsData;
}

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id);
}
