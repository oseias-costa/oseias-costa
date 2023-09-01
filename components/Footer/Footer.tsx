import { FooterContact, FooterContainer } from "./footer.styles";
import Logo from '../../public/oseias-logo-two.svg'
import Image from "next/image";

export default function Footer(){
    return(
        <FooterContainer>
            <Image src={Logo} alt='Logo Oséias Costa' />
            <FooterContact>

            </FooterContact>
        </FooterContainer>
    )
}