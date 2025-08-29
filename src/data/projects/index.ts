import ecommercePlatform from "./ecommerce-platform.json";
import fitnessApp from "./fitness-app.json";
import aiChatbot from "./ai-chatbot.json";
import type { ProjectDetail } from "@/types";

const projects: ProjectDetail[] = [
  ecommercePlatform,
  fitnessApp,
  aiChatbot,
].sort((a, b) => a.order - b.order) as ProjectDetail[];

export default projects;
