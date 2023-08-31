import { DescriptionTecnology, IconTecnology, TecnologyItemContainer } from "./tecnologies.styles";
import { TecnologyItemProps } from "./tecnology.styles";

export default function TecnologyItem({key, icon, text}: TecnologyItemProps){
    return(
        <TecnologyItemContainer key={key}>
            <IconTecnology src={icon} alt={text} />
            <DescriptionTecnology>{text}</DescriptionTecnology>
        </TecnologyItemContainer>
    )
}