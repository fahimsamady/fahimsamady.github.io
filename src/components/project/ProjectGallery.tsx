"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Play, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectGalleryProps {
  project: Project;
}

// Clean video URLs: remove autoplay/playsinline/mute
function cleanVideoUrl(url: string) {
  return url
    .replace(/(\?|&)(autoplay|playsinline|mute)=\d+/g, "")
    .replace(/&&/g, "&")
    .replace(/\?&/, "?")
    .replace(/\?$/, "");
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalMedia =
    (project.videos?.length || 0) + (project.gallery?.length || 0);

  const goToPrevious = useCallback(() => {
    setActiveMediaIndex((prev) => (prev > 0 ? prev - 1 : totalMedia - 1));
  }, [totalMedia]);

  const goToNext = useCallback(() => {
    setActiveMediaIndex((prev) => (prev < totalMedia - 1 ? prev + 1 : 0));
  }, [totalMedia]);

  // Add muted attribute to iframes after render
  const enforceMuted = (iframe: HTMLIFrameElement | null) => {
    if (iframe) {
      iframe.setAttribute("muted", "");
    }
  };

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
        <div className="relative rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center">
          {project.videos &&
          project.videos.length > 0 &&
          activeMediaIndex < project.videos.length ? (
            <div className="relative w-full max-w-4xl">
              <iframe
                ref={enforceMuted}
                src={cleanVideoUrl(project.videos[activeMediaIndex] || "")}
                className="w-full aspect-video"
                title={`${project.title} - Video ${activeMediaIndex + 1}`}
                frameBorder="0"
                allow="encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : project.gallery && project.gallery.length > 0 ? (
            <Image
              src={
                project.gallery[
                  activeMediaIndex - (project.videos?.length || 0)
                ]
              }
              alt={`${project.title} - Media ${activeMediaIndex + 1}`}
              width={800}
              height={600}
              className="max-w-full max-h-96 object-contain"
            />
          ) : null}
        </div>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 z-10 p-3 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all"
            title="Close Fullscreen"
          >
            <X size={24} className="text-white" />
          </button>

          {project.videos &&
          project.videos.length > 0 &&
          activeMediaIndex < project.videos.length ? (
            <iframe
              ref={enforceMuted}
              src={cleanVideoUrl(project.videos[activeMediaIndex] || "")}
              className="w-full h-full max-w-7xl max-h-[90vh] aspect-video"
              title={`${project.title} - Video ${activeMediaIndex + 1}`}
              frameBorder="0"
              allow="encrypted-media; picture-in-picture"
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
              width={1200}
              height={900}
              className="max-w-full max-h-[90vh] object-contain"
            />
          ) : null}
        </div>
      )}
    </section>
  );
}
