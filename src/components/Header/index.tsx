import { ContainerHeader, Rotate } from "./styled";
import componentlogo from '../../assets/react.svg'
import { Outlet } from "react-router-dom";

export function Header(){
    return(
    <ContainerHeader>
        <Rotate>
        <img src={ componentlogo } height={50} alt="logo"/>
        </Rotate>
        <h1>TipTech</h1>
    </ContainerHeader>
    )
}