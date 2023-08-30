import { ProjectCardContainer, ProjectCardText, ImgCard } from "./projectsCovers.styles";
import { ProjectCardProps } from "./projectsCovers.types";

const ProjectCard: React.FC<ProjectCardProps> = ({img, alt}) =>  {
  return (
    <ProjectCardContainer>
      <ImgCard src={img} alt={alt} />
      <ProjectCardText>{alt}</ProjectCardText>
    </ProjectCardContainer>
  );
}

export default ProjectCard
