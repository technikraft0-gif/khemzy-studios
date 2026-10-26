import { servicesData } from "../data/services";
import type { Service } from "../types";

export { servicesData };

export function getServiceById(id: string): Service | undefined {
  return servicesData.find((s) => s.id.toLowerCase() === id.toLowerCase());
}

export function getAllServices(): Service[] {
  return servicesData;
}
