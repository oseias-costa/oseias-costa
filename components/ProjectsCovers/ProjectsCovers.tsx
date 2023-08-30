import { ProjectsContainer, H2, ProjectsItems } from "./projectsCovers.styles";
import ProjectCard from "./ProjectCard";
import { projectsCover } from "./_cardsData";
import { ProjectCardProps, ProjectsCoverItem } from "./projectsCovers.types";
import Link from "next/link";



export function Projects() {
  const projectCards = projectsCover.map((item: ProjectsCoverItem) => {
    return(
      <Link href={`project/${item.link}`}  key={item.id}>
        <ProjectCard img={item.img} alt={item.alt} />
      </Link>
    )
  })

  return (
    <ProjectsContainer>
      <H2>Projetos Reais</H2>
      <ProjectsItems>{projectCards}</ProjectsItems>
    </ProjectsContainer>
  );
}
