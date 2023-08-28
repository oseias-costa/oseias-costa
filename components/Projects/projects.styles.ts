import styled from "styled-components";

export const ProjectsContainer = styled.section``;

export const H2 = styled.h2`
  color: var(--color-gray);
  font-family: var(--font-coolvetica);
  font-size: 32px;
  max-width: 340px;

  @media (max-width: 590px) {
    font-size: 26px;
    max-width: 260px;
  }
`;

export const ProjectCardContainer = styled.div`
  width: 257px;
  height: 257px;
  background-color: var(--color-background-section);
`;
