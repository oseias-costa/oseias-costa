"use client";
import { memo } from "react";
import { WppLink } from "./WppLink";
import { HeaderContainer, Menu, LinkMenu } from "./header.styles";

function Header() {
  return (
    <HeaderContainer>
      <Menu>
        <LinkMenu>Projetos</LinkMenu>
        <LinkMenu>Tecnologias</LinkMenu>
        <LinkMenu>Sobre mim</LinkMenu>
      </Menu>
      <LinkMenu>
        <WppLink />
      </LinkMenu>
    </HeaderContainer>
  );
}

export default memo(Header);
