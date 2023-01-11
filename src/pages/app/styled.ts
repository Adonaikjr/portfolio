import styled from 'styled-components'

export const ContainerApp = styled.main`
  width: 100%;
  display: flex;
  height: 75vh;
  justify-content: space-between;
  flex-wrap: wrap;

  article {
    width: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 260px;
      width: 260px;
    }
  }

  section {
    width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    h1 {
      padding-left: 1.8rem;
      width: 22rem;
    }
    p {
      padding-left: 1.8rem;
      margin-top: 1rem;
      font-weight: ${(props) => props.theme.fonts_400};
    }
  }
  span {
    padding-left: 1.8rem;
    width: 100%;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    a {
      color: ${({ theme }) => theme.base_text};
    }
  }
  @media (max-width: 1287px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    @media (max-width: 1029px) {
      height: 100%;
    }
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 13.25rem;
  width: 70%;
  margin-top: -4rem;
  background-color: ${(props) => props.theme.base_profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;
  p {
    margin: 0rem 2rem 0rem 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`

export const NewContainerButton = styled.div`
  border: solid;
  text-align: center;
  width: 15rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.base_span};
`
