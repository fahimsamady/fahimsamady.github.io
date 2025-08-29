import type { Project } from "@/types";
import machineMonitoringSystem from "./machine-monitoring-system.json";
import sensorConstructor from "./sensor-constructor.json";
import projectManagementSystem from "./project-management-system.json";
import gpAppointmentBookingSystem from "./gp-appointment-booking-system.json";

const projects: Project[] = [
  machineMonitoringSystem,
  sensorConstructor,
  projectManagementSystem,
  gpAppointmentBookingSystem,
].sort((a, b) => a.order - b.order) as Project[];

export default projects;
