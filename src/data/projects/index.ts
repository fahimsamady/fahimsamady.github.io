import machineMonitoringSystem from "./machine-monitoring-system.json";
import sensorConstructor from "./sensor-constructor.json";
import type { Project } from "@/types";

const projects: Project[] = [machineMonitoringSystem, sensorConstructor].sort(
  (a, b) => a.order - b.order
) as Project[];

export default projects;
