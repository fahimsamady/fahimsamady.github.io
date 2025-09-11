"use client";

import { GraduationCap } from "lucide-react";
import { getEducation } from "@/lib/data";
import type { Education } from "@/types";
import InteractiveTimeline from "../components/InteractiveTimeline";

export default function EducationSection() {
  const education: Education[] = getEducation();

  // Transform education data to match InteractiveTimeline format
  const timelineItems = education.map((edu) => ({
    id: String(edu.id),
    icon: GraduationCap,
    title: edu.degree,
    subtitle: edu.institution,
    period: edu.period,
    location: `${edu.institution}, ${edu.location}`,
    gpa: edu.gpa,
    description: edu.description,
    achievements: edu.achievements,
  }));

  return (
    <section className="section-padding">
      <h2 className="section-title">Education</h2>
      <InteractiveTimeline items={timelineItems} />
    </section>
  );
}
