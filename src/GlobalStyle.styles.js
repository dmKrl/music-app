import { createGlobalStyle, css } from 'styled-components';

const FontFaces = css`
  @font-face {
    font-family: 'StratosSkyeng';
    src:
      local('StratosSkyeng'),
      local('StratosSkyeng'),
      url('fonts/StratosSkyeng.woff2') format('woff2'),
      url('fonts/StratosSkyeng.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;

const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
-webkit-box-sizing: border-box;
box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}
button {
  cursor: pointer;
}

ul li {
  list-style: none;
}
${FontFaces}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #ffffff;
  background-color: #383838;
}
`;
export default GlobalStyle;
