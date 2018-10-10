import React from 'react';
import ProjectDetails from './ProjectsDetails';

import { Consumer } from '../../context/context';

export default props => (
  <Consumer>
    {({props}) => <ProjectDetails {...props} detailsPanelVisibleClickHandler = {detailsPanelVisible}/> }
  </Consumer>
  );