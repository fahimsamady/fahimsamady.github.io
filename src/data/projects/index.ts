import machineMonitoringSystem from "./machine-monitoring-system.json";
import fitnessApp from "./fitness-app.json";
import aiChatbot from "./ai-chatbot.json";
import type { Project } from "@/types";

const projects: Project[] = [
  machineMonitoringSystem,
  fitnessApp,
  aiChatbot,
].sort((a, b) => a.order - b.order) as Project[];

export default projects;
