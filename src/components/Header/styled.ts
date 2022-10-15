import styled  from 'styled-components';
import capa from '../../assets/capa.svg'

export const ContainerHeader = styled.header`
box-shadow: 0px 1px 10px;
    background-image: url(${capa});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height:18.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Rotate = styled.div`
  display: inline-block;
  animation: rotate 7s linear infinite;
  font-size: 1.2rem;

  @keyframes rotate {
    from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
  }
`;
