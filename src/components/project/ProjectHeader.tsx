import { Github, Play, Calendar, User } from "lucide-react";
import type { Project } from "@/types";
import { getTypeIcon, getTypeColor } from "@/lib/projectTypes";

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  const TypeIcon = getTypeIcon(project.type);

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(
            project.type
          )}`}
        >
          <TypeIcon size={14} className="inline mr-1" />
          {project.type.toUpperCase()}
        </span>
      </div>
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-lg max-w-2xl">{project.shortDescription}</p>

      {/* Project Meta */}
      <div className="grid mt-4 grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="flex items-center gap-3">
          <Calendar size={20} className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-medium">{project.duration}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <User size={20} className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Type</p>
            <p className="font-medium capitalize">{project.type}</p>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-3">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-xl border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-8">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex items-center gap-2"
          >
            <Github size={16} />
            View Code
          </a>
        )}
        {project.projectLink && (
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex items-center gap-2"
          >
            <Play size={16} />
            View Project
          </a>
        )}
      </div>
    </section>
  );
}
