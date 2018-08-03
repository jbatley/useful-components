import { css } from 'styled-components';

const transparentSelection = css`
  &::selection {
    background: transparent;
  }
  &::-moz-selection {
    background: transparent;
  }
`;

export default transparentSelection;
