"use client";

import { Briefcase } from "lucide-react";
import { getExperience } from "@/lib/data";
import type { Experience } from "@/types";
import TimelineItem from "../components/TimelineItem";

export default function ExperienceSection() {
  const experiences: Experience[] = getExperience();

  return (
    <section className="section-padding">
      <h2 className="text-3xl font-bold text-onSurface mb-8">Experience</h2>

      <div className="relative space-y-8">
        {/* vertical timeline spine */}
        <div
          className="absolute left-4 top-0 bottom-0 w-px bg-primary/30"
          aria-hidden
        />

        <div className="space-y-8">
          {experiences.map((exp) => (
            <TimelineItem
              key={exp.id}
              icon={Briefcase}
              title={exp.title}
              subtitle={exp.company}
              period={exp.period}
              location={exp.location}
              description={exp.description}
              achievements={exp.achievements}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
