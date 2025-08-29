"use client";

import { useState } from "react";
import { getSkills } from "@/lib/data";
import type { Skills } from "@/types";
import { LucideIcon } from "lucide-react";
import { icons } from "@/lib/icons";

const tabList = [
  { key: "software", label: "Software", icon: icons.Laptop },
  { key: "expertise", label: "Expertise", icon: icons.Cog },
  { key: "language", label: "Language", icon: icons.Languages },
] as const;

export default function Skills() {
  const skills: Skills = getSkills();
  const [activeTab, setActiveTab] = useState<keyof Skills>("software");

  return (
    <section className="section-padding space-y-6">
      <h2 className="text-2xl font-semibold">Skills</h2>

      {/* Tabs */}
      <div className="flex gap-3">
        {tabList.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-base rounded-xl text-sm font-medium flex items-center gap-2 transition-all ${
              activeTab === tab.key ? "tab-active" : "tab-inactive"
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills[activeTab].map((skill) => {
          const Icon =
            icons[skill.icon as keyof typeof icons] || icons.FileCode;

          return (
            <div key={skill.name} className="skill-tag flex items-center gap-2">
              <Icon size={16} />
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
