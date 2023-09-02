import Image from "next/image";
import styled from "styled-components";

export const HeadlineContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ImgHeadline = styled(Image)`
  width: 350px;
  height: 500.86px;

  @media (max-width: 590px) {
    height: 100%;
    width: auto;
  }
`;

export const HeadlineDescription = styled.div`
  background-color: var(--color-background-section);
  margin: 30px;
  padding: 50px;
  height: 500.86px;

  @media (max-width: 925px) {
    position: relative;
    bottom: 30px;
  }

  @media (max-width: 590px) {
    margin: 5px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
    padding-top: 40px;
    width: 100%;
    height: auto;
  }
`;

export const H1 = styled.h1`
  color: var(--color-gray);
  font-family: var(--font-coolvetica);
  font-size: 52px;
  max-width: 340px;
  background-color: var(--color-background-section);

  @media (max-width: 590px) {
    font-size: 36px;
    max-width: 260px;
  }
`;

export const Description = styled.p`
  color: var(--color-gray);
  font-family: var(--font-manrope);
  max-width: 420px;
  background-color: var(--color-background-section);
  font-size: 11pt;
  margin-bottom: 30px;
`;

export const Button = styled.a`
  background-color: var(--color-gray);
  color: var(--color-background-section);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  font-size: 18px;
  font-family: var(--font-coolvetica);
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 10px;
  padding-bottom: 9px;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    box-shadow: rgba(242, 206, 27, 0.19) 0px 10px 20px,
      rgba(242, 206, 27, 0.23) 0px 6px 6px;
  }
`;

export const SocialMidias = styled.div`
  display: flex;
  padding-top: 36px;
  background-color: var(--color-background-section);
`;

export const LinkSocialMidia = styled.a`
  cursor: pointer;
  background-color: transparent;

  &:hover{
    .svgColor {
              transition: 0.3s linear;
              fill: var(--color-hover);
      }
  }

`;

export const LogoIcon = styled(Image)`
  width: 140px;
  height: auto;
  background-color: var(--color-background-section);

  @media (max-width: 590px) {
    width: 100px;
    height: auto;
  }
`;
