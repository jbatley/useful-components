import styled, { css, keyframes } from 'styled-components';
import { colors, shades } from '../../Shared/theme';

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const selectColor = ({ color }) => `fill ${colors[color] || shades[color]};`;

const style = css`
  animation: ${spin} 1s linear infinite;
  transform-origin: loading;
  ${props => selectColor(props)}
`;

export default styled.svg`
  ${style}
`;
