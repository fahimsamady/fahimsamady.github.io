import {
  Globe,
  Smartphone,
  Zap,
  Cpu,
  Component,
  LoaderPinwheel,
} from "lucide-react";

export const projectTypes = [
  // SAFELIST THESE COLORS IN TAIWILND CONFIG
  {
    key: "all",
    label: "All",
    icon: LoaderPinwheel,
    color: "bg-gray-100 text-gray-800",
  },
  { key: "web", label: "Web", icon: Globe, color: "bg-blue-100 text-blue-800" },
  {
    key: "mobile",
    label: "Mobile",
    icon: Smartphone,
    color: "bg-green-100 text-green-800",
  },
  {
    key: "desktop",
    label: "Desktop",
    icon: Zap,
    color: "bg-purple-100 text-purple-800",
  },
  {
    key: "ai",
    label: "AI & ML",
    icon: Component,
    color: "bg-red-100 text-red-800",
  },
  {
    key: "other",
    label: "Other",
    icon: Cpu,
    color: "bg-orange-100 text-orange-800",
  },
] as const;

export type ProjectType = (typeof projectTypes)[number]["key"];

export const getTypeIcon = (type: string) => {
  const typeConfig = projectTypes.find((t) => t.key === type);
  return typeConfig ? typeConfig.icon : Globe;
};

export const getTypeColor = (type: string) => {
  const typeConfig = projectTypes.find((t) => t.key === type);
  return typeConfig ? typeConfig.color : "bg-gray-100 text-gray-800";
};

export const getTypeConfig = (type: string) => {
  return projectTypes.find((t) => t.key === type) || projectTypes[0];
};
