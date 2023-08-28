"use client";
import { ProjectsContainer, H2 } from "./projects.styles";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <ProjectsContainer>
      <H2>Projetos</H2>
      <ProjectCard />
    </ProjectsContainer>
  );
}
