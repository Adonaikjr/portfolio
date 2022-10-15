import { ContainerCard } from "./styled";

interface types_props{
    title:string;
    text:string;
}

export function Cards( { title, text }: types_props ){
    return(
        <ContainerCard> 
            <h3>{title}</h3>
            <p>{text}</p>
        </ContainerCard>
    )
}