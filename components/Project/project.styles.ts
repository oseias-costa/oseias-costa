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
`

export const ProjectItem = styled.div`
    display: flex;
    background-color: var(--color-background-section);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const DescriptionProject = styled(Description)`
    max-width: 300px;
`

export const Technologies = styled.div`
    display: flex;
    background-color: var(--color-background-section);
    padding-bottom: 12px;
    max-width: 50px;
`

export const TechnologiesList = styled.div`
    max-width: 248px;
    display: flex;
    color: var(--color-gray);
    font-family: var(--font-manrope);
    
    background-color: var(--color-background-section);
    font-size: 11pt;
    margin-bottom: 5px;
   
    `

export const Technologie = styled.p`
    color: var(--color-gray);
    font-family: var(--font-manrope);
    background-color: var(--color-background-section);
    font-size: 11pt; 
    margin: 2px;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 3px;
    padding-bottom: 3px;
`

export const LinkProject = styled.div`
    display: flex;
    background-color: var(--color-background-section);
`

export const ImgProject = styled(Image)`
    width: 533.3332px;
    height: 400px;
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
`

export const DescriptionContent = styled.p`
    color: var(--color-gray);
    font-family: var(--font-manrope);
    max-width: 420px;
    background-color: var(--color-background-section);
    font-size: 11pt;
    margin-bottom: 5px;
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
`

export const ImageLogo = styled(Image)`
    margin-bottom: 30px
`