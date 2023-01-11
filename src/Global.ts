import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow:0 0 0 2px ${({ theme }) => theme.base_border}
    }
    
    body{
        margin: 0 auto;
        background: ${({ theme }) => theme.base_background};
        color: ${({ theme }) => theme.base_text};
        max-width: 1440px;
        font-family: ${(props) => props.theme.font};
        a{
        text-decoration: none;
        color: ${({ theme }) => theme.base_text};
        }
    }
`
