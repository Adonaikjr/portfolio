import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import { ContainerLayoutDefault } from "./styled";

export function LayoutDefault(){
    return(
        <ContainerLayoutDefault>
            <Header/>
            <Outlet/>
        </ContainerLayoutDefault>
    )
}