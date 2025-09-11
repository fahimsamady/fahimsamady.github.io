import { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  gpa?: string;
  description?: string;
  achievements?: string[];
}

export default function TimelineItem({
  icon: Icon,
  title,
  subtitle,
  period,
  location,
  gpa,
  description,
  achievements = [],
}: TimelineItemProps) {
  return (
    <div className="relative pl-12">
      {/* Dot on the spine */}
      <div
        className="absolute -left-1 top-3 w-10 h-10 ring-4 ring-surface rounded-full bg-primary flex items-center justify-center"
        aria-hidden
      >
        <Icon size={24} className="text-white" />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-onSurface">{title}</h3>
            <p className="text-lg text-primary font-bold">{subtitle}</p>
          </div>

          <div className="flex items-center gap-2 text-onSurface/70">
            <span className="font-medium">{period}</span>
          </div>
        </div>

        {location && (
          <p className="text-onSurface/60 flex items-center gap-2">
            <span>{location}</span>
          </p>
        )}

        {gpa && <p className="text-primary font-bold">{gpa}</p>}

        {description && (
          <p className="text-onSurface/80 leading-relaxed">{description}</p>
        )}

        {achievements.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-onSurface/70">
            {achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
