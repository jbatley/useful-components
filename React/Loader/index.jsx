import React from 'react';
import PropTypes from 'prop-types';

import Element from './element';

const LoaderComponent = ({ color = 'black', size = 100 }) => (
  <Element viewBox="0 0 100 100" color={color} width={size} height={size}>
    <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50" />
  </Element>
);

LoaderComponent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default LoaderComponent;
