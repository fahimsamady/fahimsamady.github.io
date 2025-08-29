import profileData from "@/data/profile.json";
import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";
import skillsData from "@/data/skills.json";

import { Profile, Education, Experience, Skills } from "@/types";

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
