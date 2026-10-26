import { portfolioProjects, getPortfolioProject, getProjectsByCategory, getFeaturedProjects } from "../data/portfolio";
import type { Project, ProjectCategory } from "../types";

export { portfolioProjects, getPortfolioProject, getProjectsByCategory, getFeaturedProjects };

export function getAllCategories(): ProjectCategory[] {
  const set = new Set<ProjectCategory>();
  portfolioProjects.forEach((p) => set.add(p.category));
  return Array.from(set);
}

export function getAdjacentProjects(currentSlug: string): {
  prev?: Project;
  next?: Project;
} {
  const index = portfolioProjects.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return {};

  const prev = index > 0 ? portfolioProjects[index - 1] : portfolioProjects[portfolioProjects.length - 1];
  const next = index < portfolioProjects.length - 1 ? portfolioProjects[index + 1] : portfolioProjects[0];

  return { prev, next };
}
