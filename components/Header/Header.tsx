"use client";
import { memo } from "react";
import { WppLink } from "./WppLink";
import { HeaderContainer, Menu, LinkMenu } from "./header.styles";

function Header() {
  return (
    <HeaderContainer>
      <Menu>
        <LinkMenu href="#projetos">Projetos</LinkMenu>
        <LinkMenu href="#tecnologias">Tecnologias</LinkMenu>
        <LinkMenu href="#depoimentos">Depoimentos</LinkMenu>
      </Menu>
      <LinkMenu href="https://api.whatsapp.com/send?phone=5554999817351&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar." target='_blank'>
        <WppLink />
      </LinkMenu>
    </HeaderContainer>
  );
}

export default memo(Header);
