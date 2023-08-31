import Image from "next/image";
import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding-top: 45px; */
`;

export const H2 = styled.h2`
  color: var(--color-gray);
  font-family: var(--font-coolvetica);
  font-size: 32px;
  max-width: 340px;
  padding-bottom: 25px;
  padding-top: 50px;

  @media (max-width: 590px) {
    font-size: 26px;
    max-width: 260px;
  }
`;

export const ProjectCardContainer = styled.div`
  width: 257px;
  height: 257px;
  background-color: var(--color-background-section);
  padding-top: 14px;
  margin: 10px;
  transition: .2s linear;

  &:hover{
    img {
      filter: grayscale(0.1)
    }
    box-shadow: rgba(255, 255, 255, 0.1) 0px 4px 12px;
    }
`;

export const ProjectCardText = styled.p`
  text-align: center;
  padding-top: 8px;
  font-family: var(--font-manrope);
  color: var(--color-gray);
  background-color: var(--color-background-section);
`

export const ImgCard = styled(Image)`
  filter: grayscale(1);
  transition: .3s linear;

  &:hover{
    filter: grayscale(0.1)
  }
`

export const ProjectsItems = styled.div`
  display: flex;
  max-width: 900px;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 30px;
`