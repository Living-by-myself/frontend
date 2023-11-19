import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        line-height: 1.5;
        
        &:focus-visible {
            outline: 2px solid transparent;
            outline-offset: 2px;
            box-shadow: ${({ theme }) =>
              `0 0 0 2px #fff, 0 0 0 calc(2px + 2px ) ${theme.colors.green[300]}`}!important;
        }
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;
