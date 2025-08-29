"use client";

import { useState } from "react";
import { getProjects } from "@/lib/data";
import type { Project } from "@/types";
import { projectTypes, type ProjectType } from "@/lib/projectTypes";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects: Project[] = getProjects();
  const [activeType, setActiveType] = useState<ProjectType>("all");

  const filteredProjects =
    activeType === "all"
      ? projects
      : projects.filter((project) => project.type === activeType);

  return (
    <section className="section-padding space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
      </div>

      {/* Project Type Filters */}
      <div className="flex gap-3 flex-wrap">
        {projectTypes.map((type) => (
          <button
            key={type.key}
            onClick={() => setActiveType(type.key)}
            className={`px-4 py-2 text-sm rounded-xl font-medium flex items-center gap-2 transition-all ${
              activeType === type.key ? "tab-active" : "tab-inactive"
            }`}
          >
            <type.icon size={16} />
            {type.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
