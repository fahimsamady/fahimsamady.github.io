"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Play } from "lucide-react";
import type { Project } from "@/types";

interface ProjectGalleryProps {
  project: Project;
}

interface MediaItem {
  type: "video" | "image";
  src: string;
  alt: string;
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenMedia, setFullscreenMedia] = useState<MediaItem | null>(
    null
  );

  // Combine videos and images into a single array
  const mediaItems: MediaItem[] = [
    ...(project.videos?.map((video, index) => ({
      type: "video" as const,
      src: cleanVideoUrl(video),
      alt: `${project.title} - Video ${index + 1}`,
    })) || []),
    ...(project.gallery?.map((image, index) => ({
      type: "image" as const,
      src: image,
      alt: `${project.title} - Image ${index + 1}`,
    })) || []),
  ];

  if (mediaItems.length === 0) {
    return null;
  }

  const openFullscreen = (media: MediaItem) => {
    setFullscreenMedia(media);
    setIsFullscreen(true);
  };

  return (
    <section className="my-6 sm:my-8">
      <div className="space-y-4">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openFullscreen(item)}
            >
              {item.type === "video" ? (
                <div className="relative w-full aspect-video">
                  <iframe
                    src={item.src}
                    className="w-full h-full rounded-xl"
                    title={item.alt}
                    frameBorder="0"
                    allow=""
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative w-full flex items-center justify-center p-4">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="max-w-full max-h-64 w-auto h-auto object-contain rounded-xl"
                  />
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl" />

              {/* Fullscreen Button - Only for Images */}
              {item.type === "image" && (
                <div className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100">
                  <Play size={16} className="text-white" />
                </div>
              )}

              {/* Media Type Indicator */}
              <div className="absolute top-4 left-4 px-2 py-1 bg-black/50 text-white text-xs rounded-lg backdrop-blur-sm">
                {item.type === "video" ? "Video" : "Image"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && fullscreenMedia && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-all"
            title="Close Fullscreen"
          >
            <X size={24} className="text-white" />
          </button>

          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
            {fullscreenMedia.type === "video" ? (
              <iframe
                src={fullscreenMedia.src}
                className="w-full h-full"
                title={fullscreenMedia.alt}
                frameBorder="0"
                allow="encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <Image
                src={fullscreenMedia.src}
                alt={fullscreenMedia.alt}
                width={1200}
                height={900}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
