import { ProjectCardContainer } from "./projects.styles";
import ImagemCard from "../../public/projects/covers/ora-brasil-cover.png";

export default function ProjectCard() {
  return (
    <ProjectCardContainer>
      <Image src={ImagemCard} alt="" />
      <p>Oral Brasil Xanxerê</p>
    </ProjectCardContainer>
  );
}
