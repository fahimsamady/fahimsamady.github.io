import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { Github, Play } from "lucide-react";
import { getTypeIcon, getTypeColor } from "@/lib/projectTypes";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const TypeIcon = getTypeIcon(project.type);
  const typeColor = getTypeColor(project.type);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
      {/* Project Image/Video */}
      {project.gallery && project.gallery.length > 0 ? (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.gallery[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 right-3">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${typeColor}`}
            >
              <TypeIcon size={12} className="inline mr-1" />
              {project.type.toUpperCase()}
            </span>
          </div>
        </div>
      ) : project.videos && project.videos.length > 0 ? (
        <div className="relative h-48 overflow-hidden bg-gray-900">
          <iframe
            src={project.videos[0]}
            className="absolute inset-0 w-full h-full"
            title={`${project.title} - Video Preview`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute top-3 right-3">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${typeColor}`}
            >
              <TypeIcon size={12} className="inline mr-1" />
              {project.type.toUpperCase()}
            </span>
          </div>
        </div>
      ) : (
        <div className="relative h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">No Image yet</div>
          </div>
          <div className="absolute top-3 right-3">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${typeColor}`}
            >
              <TypeIcon size={12} className="inline mr-1" />
              {project.type.toUpperCase()}
            </span>
          </div>
        </div>
      )}

      {/* Project Content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Technologies Preview */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-xl"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-xl">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Project Actions - Takes full available height and aligns content to bottom */}
        <div className="flex gap-2 pt-2 flex-1 items-end">
          <Link
            href={`/projects/${project.id}`}
            className="flex-1 btn text-center"
          >
            View Details
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Github size={16} />
            </a>
          )}
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Play size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
