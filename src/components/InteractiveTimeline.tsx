"use client";

import { useState } from "react";
import { LucideIcon } from "lucide-react";

interface TimelineItem {
  id: string | number;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  gpa?: string[];
  description?: string;
  achievements?: string[];
}

interface InteractiveTimelineProps {
  items: TimelineItem[];
}

export default function InteractiveTimeline({
  items,
}: InteractiveTimelineProps) {
  const [activeItem, setActiveItem] = useState(items[0]?.id || "");

  const selectedItem = items.find((item) => item.id === activeItem) || items[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Menu */}
      <div className="lg:col-span-1">
        <div className="space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full text-left p-4 transition-all duration-300 ${
                activeItem === item.id
                  ? "text-primary border-l-4 border-primary pl-3"
                  : "text-onSurface hover:text-primary hover:border-l-2 hover:border-primary/50 hover:pl-3"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.subtitle}</p>
                  <p className="text-xs opacity-70">{item.period}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Details */}
      <div className="lg:col-span-2">
        <div
          key={selectedItem.id}
          className="space-y-4 animate-in fade-in-0 slide-in-from-right-4 duration-300"
        >
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-onSurface">
                {selectedItem.title}
              </h3>
              <p className="text-lg text-primary font-semibold">
                {selectedItem.subtitle}
              </p>
              <p className="text-sm text-onSurface/70">{selectedItem.period}</p>
            </div>
          </div>

          {/* Location */}
          {selectedItem.location && (
            <p className="text-onSurface/60">{selectedItem.location}</p>
          )}

          {/* GPA */}
          {selectedItem.gpa && selectedItem.gpa.length > 0 && (
            <div className="space-y-2">
              {selectedItem.gpa.map((gpaItem, idx) => (
                <div key={idx} className="inline-block">
                  <span className="bg-primary/10 text-primary px-3 py-1 mr-1 rounded-full text-sm font-semibold">
                    {gpaItem}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          {selectedItem.description && (
            <p className="text-onSurface/80 leading-relaxed">
              {selectedItem.description}
            </p>
          )}

          {/* Achievements */}
          {selectedItem.achievements &&
            selectedItem.achievements.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold text-onSurface/80">
                  Key Details:
                </h4>
                <ul className="space-y-1">
                  {selectedItem.achievements.map((ach, idx) => (
                    <li
                      key={idx}
                      className="text-onSurface/70 flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
