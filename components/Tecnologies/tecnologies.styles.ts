import Image from "next/image";
import { styled } from "styled-components";

export const TecnologiesSectionContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const TecnologiesSectionList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 900px;
`

export const TecnologyItemContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
    width: 110px;
`

export const IconTecnology = styled(Image)`
    width: 72px;
    height: 72px;
`

export const DescriptionTecnology = styled.p`
    font-family: var(--font-manrope);
    color: var(--color-gray);
    max-width: 90px;
    text-align: center;
`
