import React from 'react';
import Projects from './Projects';

import { Consumer } from '../../context/context';

export default props => (
  <Consumer>
    {({props}) => <Projects {...props} />}
  </Consumer>
  );