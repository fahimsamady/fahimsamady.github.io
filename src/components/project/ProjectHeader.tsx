import { Github, Play, Calendar, User } from "lucide-react";
import type { Project } from "@/types";
import { getTypeIcon, getTypeColor } from "@/lib/projectTypes";

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  const TypeIcon = getTypeIcon(project.type);

  return (
    <section className="mb-8 sm:mb-12">
      <div className="flex items-center gap-2 sm:gap-3 mb-3"></div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        {project.title}
      </h1>
      <p className="text-base sm:text-lg max-w-2xl">
        {project.shortDescription}
      </p>

      {/* Project Meta */}
      <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
        <div className="flex items-center gap-3">
          <Calendar size={18} className="sm:w-5 sm:h-5 text-gray-500" />
          <div>
            <p className="text-xs sm:text-sm text-gray-500">Duration</p>
            <p className="text-sm sm:text-base font-medium">
              {project.duration}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <User size={18} className="sm:w-5 sm:h-5 text-gray-500" />
          <div>
            <p className="text-xs sm:text-sm text-gray-500">Type</p>
            <p className="text-sm sm:text-base font-medium capitalize">
              {project.type}
            </p>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-3">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-xl border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Github size={16} />
            <span className="hidden sm:inline">View Code</span>
            <span className="sm:hidden">Code</span>
          </a>
        )}
        {project.projectLink && (
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Play size={16} />
            <span className="hidden sm:inline">View Project</span>
            <span className="sm:hidden">Project</span>
          </a>
        )}
      </div>
    </section>
  );
}
