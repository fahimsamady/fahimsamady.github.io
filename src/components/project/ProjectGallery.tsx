"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { Project } from "@/types";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  // Only render if there's media to show
  if (
    !(
      (project.gallery && project.gallery.length > 0) ||
      (project.videos && project.videos.length > 0)
    )
  ) {
    return null;
  }

  return (
    <section className="my-6 sm:my-8">
      <div className="space-y-4">
        {/* Main Media */}
        <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900">
          {project.videos &&
          project.videos.length > 0 &&
          activeMediaIndex < project.videos.length ? (
            <iframe
              src={project.videos[activeMediaIndex]}
              className="absolute inset-0 w-full h-full"
              title={`${project.title} - Video ${activeMediaIndex + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : project.gallery && project.gallery.length > 0 ? (
            <Image
              src={
                project.gallery[
                  activeMediaIndex - (project.videos?.length || 0)
                ]
              }
              alt={`${project.title} - Media ${activeMediaIndex + 1}`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <div className="text-2xl sm:text-4xl mb-2">📷</div>
                <div className="text-sm sm:text-lg">No Media Available</div>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
          {project.videos &&
            project.videos.map((video, index) => (
              <button
                key={`video-${index}`}
                onClick={() => setActiveMediaIndex(index)}
                className={`relative h-16 sm:h-20 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  activeMediaIndex === index
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                <iframe
                  src={video}
                  className="w-full h-full"
                  title={`${project.title} - Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Play size={16} className="sm:w-6 sm:h-6 text-white" />
                </div>
              </button>
            ))}
          {project.gallery &&
            project.gallery.map((image, index) => (
              <button
                key={`image-${index}`}
                onClick={() =>
                  setActiveMediaIndex((project.videos?.length || 0) + index)
                }
                className={`relative h-16 sm:h-20 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  activeMediaIndex === (project.videos?.length || 0) + index
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={image}
                  alt={`${project.title} - Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}
