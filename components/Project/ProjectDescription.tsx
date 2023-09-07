"use client";
import { LinkProject, ProjectDescriptionContainer, Technologies, TechnologiesList, ProjectH2, DescriptionItem, LinkProjectA, DescriptionContent, DescriptionProject, Technologie } from "./project.styles";

interface ProjectDescriptionProps {
    alt: string;
    description: string;
    tecnologies: string[];
    adress: string;
    code: string;
    status: string;
}

export default function ProjectDescription({ 
    alt, description, tecnologies, adress, code, status
}: ProjectDescriptionProps){
    const tecnologiesList = tecnologies.map((item: string) => <Technologie key={item}>{item}</Technologie>)

    return(
        <>
        <ProjectDescriptionContainer>
            <ProjectH2>Projeto {alt}</ProjectH2>
            <DescriptionProject>{description}</DescriptionProject>
            <Technologies>
                <DescriptionItem>Tecnologias:</DescriptionItem>
                <TechnologiesList>{tecnologiesList}</TechnologiesList>
            </Technologies>
            <LinkProject>
                <DescriptionItem>Endereço: </DescriptionItem>
                <LinkProjectA href={adress} target='_blank'>{adress}</LinkProjectA>
            </LinkProject>
            <LinkProject>
                <DescriptionItem>Github: </DescriptionItem>
                <LinkProjectA href={code} target='_blank'>{code}</LinkProjectA>
            </LinkProject>
            <LinkProject>
                <DescriptionItem>Status: </DescriptionItem>
                <DescriptionContent>{status === 'active' ? 'Ativo' : 'Inativo'}</DescriptionContent>
            </LinkProject>
        </ProjectDescriptionContainer>
        </>
    )
}