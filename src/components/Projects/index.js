import React from 'react';
import Projects from './Projects';

import { Consumer } from '../../context/context';

export default props => (
  <Consumer>
    {() => <Projects {...props} />}
  </Consumer>
  );