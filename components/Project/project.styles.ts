import Image from "next/image";
import { styled } from "styled-components";
import { Description } from "../Headline/headline.styles";
import { H2 } from "../ProjectsCovers/projectsCovers.styles";

export const ProjectsContainer = styled.section`
`

export const ProjectDescriptionContainer = styled.div`
    height: 400px;
    width: 500px;
    padding: 30px;
    background-color: var(--color-background-section);

    @media(max-width: 600px){
        width: calc(100% - 40px);
        height: auto;
    }
`

export const ProjectItem = styled.div`
    display: flex;
    background-color: var(--color-background-section);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    @media(max-width: 1040px){
        align-items: center;
        flex-direction: column;
        margin-bottom: 25px;
    }
`

export const DescriptionProject = styled(Description)`
    max-width: 300px;

    @media(max-width: 600px){
        width: calc(100% - 40px);
        height: auto;
    }
`

export const Technologies = styled.div`
    background-color: var(--color-background-section);
    padding-bottom: 12px;
`

export const TechnologiesList = styled.div`
    color: var(--color-gray);
    font-family: var(--font-manrope);
    background-color: var(--color-background-section);
    font-size: 11pt;
    margin-bottom: 5px;
    display: flex;

    @media(max-width: 740px){
        flex-wrap: wrap;
    }

    `

export const Technologie = styled.p`
    color: var(--color-gray);
    font-family: var(--font-manrope);
    color: var(--color-background-section);
    background-color: var(--color-gray);
    font-size: 11pt; 
    margin: 2px;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 3px;
    padding-bottom: 3px;
    max-height: 43px;
    max-width: 200px; 
`

export const LinkProject = styled.div`
    display: flex;
    background-color: var(--color-background-section);
`

export const ImgProject = styled(Image)`
    width: 533.3332px;
    height: 400px;

    @media(max-width: 600px){
        width: 100%;
        height: auto;   
    }
`

export const ProjectH2 = styled(H2)`
    background-color: var(--color-background-section);
`

export const DescriptionItem = styled.p`
    color: var(--color-gray);
    font-family: var(--font-manrope);
    max-width: 420px;
    background-color: var(--color-background-section);
    font-size: 11pt;
    margin-bottom: 5px;
    padding-right: 6px;

    @media(max-width: 600px){
        max-width: 248px;
    }
`

export const DescriptionContent = styled.p`
    color: var(--color-gray);
    font-family: var(--font-manrope);
    max-width: 420px;
    background-color: var(--color-background-section);
    font-size: 11pt;
    margin-bottom: 5px;

    @media(max-width: 600px){
        max-width: 248px;
    }
`

export const LinkProjectA = styled.a`
    color: var(--color-gray);
    font-family: var(--font-manrope);
    max-width: 420px;
    background-color: var(--color-background-section);
    font-size: 11pt;
    margin-bottom: 5px;
    transition: .3s linear;

    &:hover {
        color: #F2CE1B;
    }

    @media(max-width: 600px){
        max-width: 248px;
    }
`

export const ImageLogo = styled(Image)`
    margin-bottom: 30px;

    @media(max-width: 600px){
        margin-top: 50px;
    }

`

export const ButtonBack = styled.button`
    color: var(--color-gray);
    position: relative;
    left: -400px;
    top: 50px;
    cursor: pointer;
    font-family: "coolvetica";
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    transition: .2s linear;

    &:hover {
        color: #F2CE1B;
    }

    @media(max-width: 1040px){
        left: -200px;
    }

    @media(max-width: 600px){
        top: 0px;
        margin-top: 20px;
        left: 0;
        position: absolute;
    }
`