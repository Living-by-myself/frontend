import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        line-height: 1.5;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
    }
`;

export default GlobalStyles;
