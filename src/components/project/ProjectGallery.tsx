"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Play, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Calculate total media count
  const totalMedia =
    (project.videos?.length || 0) + (project.gallery?.length || 0);

  // Navigation functions
  const goToPrevious = useCallback(() => {
    setActiveMediaIndex((prev) => (prev > 0 ? prev - 1 : totalMedia - 1));
  }, [totalMedia]);

  const goToNext = useCallback(() => {
    setActiveMediaIndex((prev) => (prev < totalMedia - 1 ? prev + 1 : 0));
  }, [totalMedia]);

  // Touch/swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      navigateWithLoading("next");
    } else if (isRightSwipe) {
      navigateWithLoading("previous");
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Preload images for faster switching
  useEffect(() => {
    if (project.gallery && project.gallery.length > 0) {
      let loadedCount = 0;
      const totalImages = project.gallery.length;

      // Preload all images immediately
      project.gallery.forEach((imageSrc) => {
        const img = new window.Image();
        img.src = imageSrc;
        img.onload = () => {
          loadedCount++;
          console.log(
            `Preloaded image: ${imageSrc} (${loadedCount}/${totalImages})`
          );
        };
        img.onerror = () => {
          loadedCount++;
          console.warn(`Failed to preload image: ${imageSrc}`);
        };
      });
    }
  }, [project.gallery]);

  // Enhanced navigation with loading states
  const navigateWithLoading = useCallback(
    (direction: "next" | "previous") => {
      setIsLoading(true);

      // Small delay to show loading state (can be removed if not needed)
      setTimeout(() => {
        if (direction === "next") {
          goToNext();
        } else {
          goToPrevious();
        }
        setIsLoading(false);
      }, 100);
    },
    [goToNext, goToPrevious]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFullscreen) return; // Don't handle keys in fullscreen mode

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          navigateWithLoading("previous");
          break;
        case "ArrowRight":
          e.preventDefault();
          navigateWithLoading("next");
          break;
        case "Escape":
          setIsFullscreen(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, navigateWithLoading]);

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
        <div
          className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          {totalMedia > 1 && (
            <>
              <button
                onClick={() => navigateWithLoading("previous")}
                disabled={isLoading}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                title="Previous"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button
                onClick={() => navigateWithLoading("next")}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                title="Next"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </>
          )}

          {/* Media Counter */}
          {totalMedia > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 px-3 py-1 bg-black bg-opacity-50 rounded-full text-white text-sm">
              {activeMediaIndex + 1} / {totalMedia}
            </div>
          )}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          )}

          {project.videos &&
          project.videos.length > 0 &&
          activeMediaIndex < project.videos.length ? (
            <div className="relative w-full max-w-4xl">
              <iframe
                src={project.videos[activeMediaIndex]}
                className="w-full aspect-video"
                title={`${project.title} - Video ${activeMediaIndex + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : project.gallery && project.gallery.length > 0 ? (
            <div className="relative w-full flex items-center justify-center">
              <Image
                src={
                  project.gallery[
                    activeMediaIndex - (project.videos?.length || 0)
                  ]
                }
                alt={`${project.title} - Media ${activeMediaIndex + 1}`}
                width={800}
                height={600}
                className="max-w-full max-h-96 object-contain cursor-pointer"
                onClick={() => setIsFullscreen(true)}
              />
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-lg transition-all"
                title="View Fullscreen"
              >
                <Maximize2 size={16} className="text-white" />
              </button>
            </div>
          ) : (
            <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-100 flex items-center justify-center">
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
                className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                  activeMediaIndex === index
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                <iframe
                  src={video}
                  className="w-full aspect-video"
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

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-10 p-3 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all"
              title="Close Fullscreen"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Navigation Arrows in Fullscreen */}
            {totalMedia > 1 && (
              <>
                <button
                  onClick={() => navigateWithLoading("previous")}
                  disabled={isLoading}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Previous"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>
                <button
                  onClick={() => navigateWithLoading("next")}
                  disabled={isLoading}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Next"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>
              </>
            )}

            {/* Media Counter in Fullscreen */}
            {totalMedia > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-black bg-opacity-50 rounded-full text-white text-lg">
                {activeMediaIndex + 1} / {totalMedia}
              </div>
            )}

            {/* Fullscreen Content */}
            {project.videos &&
            project.videos.length > 0 &&
            activeMediaIndex < project.videos.length ? (
              <iframe
                src={project.videos[activeMediaIndex]}
                className="w-full h-full max-w-7xl max-h-[90vh] aspect-video"
                title={`${project.title} - Video ${activeMediaIndex + 1}`}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
        </div>
      )}
    </section>
  );
}
