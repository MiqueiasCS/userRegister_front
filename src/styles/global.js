import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

a{
    text-decoration:none;
    cursor:pointer;
}
button{
    cursor:pointer;
    border:none;
}
ul,li{
    list-style:none;
}
`;
