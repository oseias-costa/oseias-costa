import { ReactNode } from "react";
import { H2 } from "../ProjectsCovers/projectsCovers.styles";
import * as S from "./tecnologies.styles";
import TecnologyItem from "./TecnologyItem";
import { tecnologiesData } from "./_tecnologiesData";

export default function TecnologiesSection(){
    const tecnologiesList = tecnologiesData.map(item => 
        <TecnologyItem 
            key={item.id} 
            icon={item.icon} 
            text={item.text} 
        />
    )
        
    return(
        <S.TecnologiesSectionContainer>
            <H2>Tecnologias</H2>
            <S.TecnologiesSectionList>{tecnologiesList}</S.TecnologiesSectionList>
        </S.TecnologiesSectionContainer>
    )
} 