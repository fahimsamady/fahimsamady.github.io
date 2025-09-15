import { Target, AlertTriangle, Lightbulb } from "lucide-react";
import type { Project } from "@/types";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="space-y-8 sm:space-y-12 mb-24">
      {/* Key Features */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
          <Target size={20} className="sm:w-6 sm:h-6" />
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          {project.keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
          <AlertTriangle size={20} className="sm:w-6 sm:h-6" />
          Challenges
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          {project.challenges.map((challenge, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700">{challenge}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Learnings */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
          <Lightbulb size={20} className="sm:w-6 sm:h-6" />
          Key Learnings
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          {project.keyLearnings.map((learning, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700">{learning}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
