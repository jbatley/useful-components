import { css } from 'styled-components';


const ripple = (color, darkColor) => css`
  background-position: center;
  transition: background 0.8s;
  &:hover {
    background: ${darkColor} radial-gradient(circle, transparent 1%, ${darkColor} 1%) center/15000%;
  }
  &:active {
    background-size: 100%;
    transition: background 0s;
    background-color: ${color};
  }
`;

export default ripple;
