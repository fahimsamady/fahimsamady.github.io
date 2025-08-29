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
    <section className="my-8">
      <div className="space-y-4">
        {/* Main Media */}
        <div className="relative h-96 rounded-2xl overflow-hidden">
          {project.videos &&
          project.videos.length > 0 &&
          activeMediaIndex < project.videos.length ? (
            <video
              controls
              className="w-full h-full object-cover"
              poster={
                project.gallery && project.gallery.length > 0
                  ? project.gallery[0]
                  : undefined
              }
            >
              <source src={project.videos[activeMediaIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
                <div className="text-4xl mb-2">📷</div>
                <div className="text-lg">No Media Available</div>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-4 gap-3">
          {project.videos &&
            project.videos.map((video, index) => (
              <button
                key={`video-${index}`}
                onClick={() => setActiveMediaIndex(index)}
                className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  activeMediaIndex === index
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Play size={24} className="text-white" />
                </div>
                <video src={video} className="w-full h-full object-cover" />
              </button>
            ))}
          {project.gallery &&
            project.gallery.map((image, index) => (
              <button
                key={`image-${index}`}
                onClick={() =>
                  setActiveMediaIndex((project.videos?.length || 0) + index)
                }
                className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
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
