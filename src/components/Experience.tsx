"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import { getExperience } from "@/lib/data";
import type { Experience } from "@/types";

export default function ExperienceSection() {
  const experiences: Experience[] = getExperience();

  return (
    <section className="section-padding">
      <h2 className="text-2xl font-semibold">Experience</h2>

      <div className="relative space-y-6">
        {/* vertical timeline spine */}
        <div
          className="absolute left-4 top-0 bottom-0 w-px bg-primary"
          aria-hidden
        />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-12">
              {/* Dot */}
              <div
                className="absolute left-1 top-3 w-6 h-6 ring-4 ring-primary rounded-full bg-primary flex items-center justify-center"
                aria-hidden
              >
                <Briefcase size={16} className="text-white" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                {/* Title & Period */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Company & Location */}
                <p className="text-xs text-gray-600 flex items-center gap-2">
                  <MapPin size={12} className="text-gray-400" />
                  <span>
                    {exp.company}, {exp.location}
                  </span>
                </p>

                {/* Description */}
                {exp.description && (
                  <p className="text-sm text-gray-700">{exp.description}</p>
                )}

                {/* Achievements */}
                {exp.achievements.length > 0 && (
                  <ul className="mt-1 text-sm list-disc list-inside space-y-0.5 text-gray-800">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
