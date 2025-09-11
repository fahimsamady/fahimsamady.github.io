"use client";

import Link from "next/link";
import type { Project } from "@/types";
import { Github, Play } from "lucide-react";
import { getTypeIcon } from "@/lib/projectTypes";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const TypeIcon = getTypeIcon(project.type);

  return (
    <div className="card group h-full flex flex-col">
      {/* Project Header */}
      <div className="p-5 pb-3">
        <div className="flex items-center justify-between mb-3">
          <span className="tech-tag">
            <TypeIcon size={12} className="inline mr-1" />
            {project.type.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="px-5 pb-5 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-onSurface mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-onSurface/70 text-justify">
            {project.description}
          </p>
        </div>

        {/* Technologies Preview */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-tag">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Project Actions */}
        <div className="flex gap-2 pt-3 items-end">
          <Link href={`/projects/${project.id}`} className="btn text-sm">
            View Details
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <Play size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
