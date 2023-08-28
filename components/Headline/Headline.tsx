"use client";
import * as S from "./headline.styles";
import ImgPhoto from "../../public/img-headline.png";
import Logo from "../../public/oseias-logo.svg";
import Linkedin from "../../public/icons/linkedin-icon.svg";
import Github from "../../public/icons/github-icon.svg";
import { memo } from "react";
import Image from "next/image";

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
          <S.LinkSocialMidia src={Linkedin} alt="Linkedin Oséias Costa" />
          <S.LinkSocialMidia src={Github} alt="Github Oséias Costa" />
        </S.SocialMidias>
      </S.HeadlineDescription>
    </S.HeadlineContainer>
  );
}

export default memo(Headline);
