"use client";

import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { getEducation } from "@/lib/data";
import type { Education } from "@/types";

export default function EducationSection() {
  const education: Education[] = getEducation();

  return (
    <section className="section-padding">
      <h2 className="text-2xl font-semibold">Education</h2>

      <div className="relative space-y-6">
        {/* vertical timeline spine */}
        <div
          className="absolute left-4 top-0 bottom-0 w-px bg-primary"
          aria-hidden
        />

        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="relative pl-12">
              {/* Dot on the spine */}
              <div
                className="absolute left-1 top-3 w-6 h-6 ring-4 ring-primary rounded-full bg-primary flex items-center justify-center"
                aria-hidden
              >
                <GraduationCap size={16} className="text-white" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-gray-900">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={12} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 flex items-center gap-2">
                  <MapPin size={12} className="text-gray-400" />
                  <span>
                    {edu.institution}, {edu.location}
                  </span>
                </p>

                {edu.gpa && (
                  <p className="text-sm text-primary font-semibold">
                    {edu.gpa}
                  </p>
                )}

                {edu.description && (
                  <p className="text-sm text-gray-700">{edu.description}</p>
                )}

                <ul className="mt-1 text-sm list-disc list-inside space-y-0.5 text-gray-800">
                  {edu.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
