"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProjectById } from "@/lib/data";
import type { ProjectDetail } from "@/types";
import {
  ArrowLeft,
  Github,
  Play,
  ExternalLink,
  FileText,
  Calendar,
  Users,
  User,
  Clock,
  Target,
  AlertTriangle,
  Lightbulb,
  BarChart3,
} from "lucide-react";
import { getTypeIcon, getTypeColor } from "@/lib/projectTypes";

interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const project = getProjectById(projectId);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  if (!project) {
    return (
      <div className="section-padding text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Project Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The project you're looking for doesn't exist.
        </p>
        <Link href="/" className="btn">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    );
  }

  const TypeIcon = getTypeIcon(project.type);

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="pt-8 pb-4">
        <Link href="/" className="btn inline-flex items-center gap-2">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={project.gallery[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20" />
          <div className="absolute bottom-6 left-6 text-white">
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
            <p className="text-lg text-gray-200 max-w-2xl">
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Project Meta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Calendar size={20} className="text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p className="font-medium">{project.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={20} className="text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Category</p>
              <p className="font-medium">{project.category}</p>
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Description */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
            <p className="text-gray-700 leading-relaxed">
              {project.longDescription}
            </p>
          </section>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
              <div className="space-y-4">
                {/* Main Media */}
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  {project.videos &&
                  project.videos.length > 0 &&
                  activeMediaIndex < project.videos.length ? (
                    <video
                      controls
                      className="w-full h-full object-cover"
                      poster={project.gallery[0]}
                    >
                      <source
                        src={project.videos[activeMediaIndex]}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
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
                        <video
                          src={video}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  {project.gallery.map((image, index) => (
                    <button
                      key={`image-${index}`}
                      onClick={() =>
                        setActiveMediaIndex(
                          (project.videos?.length || 0) + index
                        )
                      }
                      className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
                        activeMediaIndex ===
                        (project.videos?.length || 0) + index
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
          )}

          {/* Key Features */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Target size={24} />
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle size={24} />
              Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{challenge}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Learnings */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Lightbulb size={24} />
              Key Learnings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyLearnings.map((learning, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{learning}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-8">
          {/* Technologies */}
          <section className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white text-gray-700 text-sm rounded-xl border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Project Info */}
          <section className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Project Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-medium">{project.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-medium capitalize">{project.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-medium">{project.duration}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
