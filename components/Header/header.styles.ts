import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 62px;
  background-color: var(--color-background);
  justify-content: space-around;
  align-items: center;

  @media (max-width: 590px) {
    display: none;
  }
`;

export const Menu = styled.nav`
  display: flex;
`;

export const LinkMenu = styled.a`
  color: var(--color-gray);
  font-family: "coolvetica";
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
  transition: 0.2s linear;
  font-size: 14pt;

  &:hover {
    color: var(--color-hover);
    svg {
      .pathGray {
        fill: var(--color-hover);
      }
    }
  }
`;

export const WppLink = styled.svg``;
