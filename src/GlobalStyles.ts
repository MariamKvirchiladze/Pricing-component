import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
}

body{
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
  font-weight: 700;
  font-style: normal;
  width: 100%;

}
`;

export default GlobalStyles;
