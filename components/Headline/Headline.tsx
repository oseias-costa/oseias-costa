"use client";
import * as S from "./headline.styles";
import ImgPhoto from "../../public/img-headline.png";
import Logo from "../../public/oseias-logo-svg.svg";
import Linkedin from "../../public/icons/linkedin-icon.svg";
import Github from "../../public/icons/github-icon.svg";
import { memo } from "react";
import GihutbIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

function Headline() {
  return (
    <S.HeadlineContainer>
      <S.ImgHeadline
        src={ImgPhoto}
        alt="Foto Desenvolvedor de Software Oséias Costa"
      />
      <S.HeadlineDescription>
        <S.LogoIcon src={Logo} alt="Oséias Costa Logo" />
        <S.H1>Desenvolvedor de Software</S.H1>
        <S.Description>
          Entrego soluções inovadoras para empresas através de websites
          responsivos e sistemas dinâmicos. Minha paixão por tecnologias como
          Javascript, Typescript e React.js me capacita a criar interfaces de
          usuário excepcionais e funcionais.
        </S.Description>
        <S.Button>Entrar em Contato</S.Button>
        <S.SocialMidias>
          <S.LinkSocialMidia href='https://github.com/oseias-costa' target='_blank'>
            <GihutbIcon />
          </S.LinkSocialMidia>
          <S.LinkSocialMidia href='https://www.linkedin.com/in/oseias-costa/' target='_blank'>
            <LinkedinIcon />
          </S.LinkSocialMidia>
        </S.SocialMidias>
      </S.HeadlineDescription>
    </S.HeadlineContainer>
  );
}

export default memo(Headline);
