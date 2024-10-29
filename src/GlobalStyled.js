import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GolobalStyled = createGlobalStyle`
${reset}

*{
    box-sizing:border-box;
}

a{
    color:#1d1d1d;
    text-decoration:none;
}

ul,li{
    list-style:none;
}
`;
