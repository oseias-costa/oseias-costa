import { styled } from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #000;
    display: flex;
    padding: 40px;
    justify-content: space-around;
    margin-top: 40px;
    width: 100%;
    
    @media(max-width: 465px){
        flex-direction: column;
        align-items: center;

        div {
            padding-top: 15px;
        }
    }
`

export const FooterContact = styled.div`
    background-color: #000;
`