import styled from 'styled-components'

export const ContainerApp = styled.main`
  width: 100%;
  display: flex;
  height: 75vh;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 99;
  section {
    width: 60rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;

    h1,
    h2 {
      text-align: center;
      width: 100%;
    }

    p {
      text-align: center;
      margin-top: 1rem;
      font-weight: ${(props) => props.theme.fonts_400};
    }
  }
  span {
    text-align: center;
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
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
