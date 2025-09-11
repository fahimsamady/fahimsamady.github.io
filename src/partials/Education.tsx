"use client";

import { GraduationCap } from "lucide-react";
import { getEducation } from "@/lib/data";
import type { Education } from "@/types";
import TimelineItem from "../components/TimelineItem";

export default function EducationSection() {
  const education: Education[] = getEducation();

  return (
    <section className="section-padding">
      <h2 className="text-3xl font-bold text-onSurface mb-8">Education</h2>

      <div className="relative space-y-8">
        {/* vertical timeline spine */}
        <div
          className="absolute left-4 top-0 bottom-0 w-px bg-primary/30"
          aria-hidden
        />

        <div className="space-y-8">
          {education.map((edu) => (
            <TimelineItem
              key={edu.id}
              icon={GraduationCap}
              title={edu.degree}
              subtitle={edu.institution}
              period={edu.period}
              location={edu.location}
              gpa={edu.gpa}
              description={edu.description}
              achievements={edu.achievements}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
