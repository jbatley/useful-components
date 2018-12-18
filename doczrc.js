import { css } from 'docz-plugin-css';

export default {
  src: './',
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: true,
    }),
  ],
};
