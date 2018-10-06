import React from 'react';
import {Consumer} from '../../../context/context';
import ProjectCard from './ProjectCard';


export default props => (
 <Consumer>{({props}) => ({<ProjectCard {...props} />})}
 </Consumer>
);