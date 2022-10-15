import styled from "styled-components";

export const ContainerApp = styled.main`
width: 100%;
a{
    position: absolute;
}
.propOne{
    bottom: -300px;
    left: 50px;
}
.propTwo{
    right: 5vh;
    bottom: -300px;
}

.propTree{
    bottom:-300px;
    left: 55vh;

}
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 13.25rem;
  width: 70%;
  margin-top: -4rem;
  background-color: ${(props) => props.theme["base_profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;
  p{
    margin: 0rem 2rem 0rem 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
    width: 100%;
    height: 100%;
`;
