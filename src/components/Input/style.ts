import  styled  from 'styled-components';
export const ContainerInput = styled.div`
width: 60%;
height: 3rem;
margin:  8.31rem 0rem 4.18rem 0rem;
input{
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: ${(props) => props.theme['base_input']};
    border: solid 1px ${(props) => props.theme['base_border']};
    
}
`