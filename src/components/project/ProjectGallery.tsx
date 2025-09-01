"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Play, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectGalleryProps {
  project: Project;
}

// Helper to sanitize video URLs (remove autoplay, mute, playsinline)
function sanitizeVideoUrl(url: string) {
  return url
    .replace(/(\?|&)(autoplay|mute|playsinline)=1/g, "")
    .replace(/&&/g, "&")
    .replace(/\?&/, "?")
    .replace(/\?$/, "");
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
      if (isFullscreen) return;

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
                src={sanitizeVideoUrl(project.videos[activeMediaIndex] || "")}
                className="w-full aspect-video"
                title={`${project.title} - Video ${activeMediaIndex + 1}`}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
              <div className="text-gray-400 text-c
