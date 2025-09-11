"use client";

import { Briefcase } from "lucide-react";
import { getExperience } from "@/lib/data";
import type { Experience } from "@/types";
import InteractiveTimeline from "../components/InteractiveTimeline";

export default function ExperienceSection() {
  const experiences: Experience[] = getExperience();

  // Transform experience data to match InteractiveTimeline format
  const timelineItems = experiences.map((exp) => ({
    id: exp.id,
    icon: Briefcase,
    title: exp.title,
    subtitle: exp.company,
    period: exp.period,
    location: `${exp.company}, ${exp.location}`,
    description: exp.description,
    achievements: exp.achievements,
  }));

  return (
    <section className="section-padding">
      <h2 className="section-title">Experience</h2>
      <InteractiveTimeline items={timelineItems} />
    </section>
  );
}
