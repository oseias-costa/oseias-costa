import { FooterContact, FooterContainer } from "./footer.styles";
import Logo from '../../public/oseias-logo-black.svg'
import Image from "next/image";
import { LinkSocialMidia } from "../Headline/headline.styles";
import GihutbIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

export default function Footer(){
    return(
        <FooterContainer>
            <Image src={Logo} alt='Logo Oséias Costa' />
            <FooterContact>
          <LinkSocialMidia href='https://github.com/oseias-costa' target='_blank'>
            <GihutbIcon />
          </LinkSocialMidia>
          <LinkSocialMidia href='https://www.linkedin.com/in/oseias-costa/' target='_blank'>
            <LinkedinIcon />
          </LinkSocialMidia>
            </FooterContact>
        </FooterContainer>
    )
}