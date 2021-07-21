import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { colors } = theme;
const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
    background:${colors.white};
    color:${colors.black};
    font-family: 'Noto Sans TC', sans-serif;
}
h1,h2,h3,h4,h5,h6{
    font-family: 'Roboto', sans-serif;
}
a{
    text-decoration:none;
}
button{
    margin:0;
    border:none;
}
.gradient-huge-heading-red-blue {
  margin: 0;
  font-size:5rem;
  background: linear-gradient(to right,#F05945,#141E61);
  background-clip:text;
  -webkit-background-clip:text;
  -moz-background-clip: text;
  -ms-background-clip:text;
  -o-background-clip:text;
  -webkit-text-fill-color:transparent;
  -moz-text-fill-color:transparent;
  -o-text-fill-color:transparent;
  -ms-text-fill-color:transparent;
}
.gradient-huge-heading-green-blue-purple {
  margin: 0;
  font-size:5rem;
  background: linear-gradient(to right,#1E6F5C,#1597BB,#31326F);
  background-clip:text;
  -webkit-background-clip:text;
  -moz-background-clip: text;
  -ms-background-clip:text;
  -o-background-clip:text;
  -webkit-text-fill-color:transparent;
  -moz-text-fill-color:transparent;
  -o-text-fill-color:transparent;
  -ms-text-fill-color:transparent;
}
`;

export default GlobalStyles;
