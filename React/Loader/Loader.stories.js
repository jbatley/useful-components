import React from 'react';

import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';

import Loader from './Loader';

storiesOf('Loader', module)
  .addDecorator(backgrounds([
    { name: 'main', value: '#f5f5f5', default: true },
  ]))
  .add('Default', () => <Loader />)
  .add('With theme colors', () => <Loader color="red" />)
  .add('Different sizes', () => <Loader size={200} />);
