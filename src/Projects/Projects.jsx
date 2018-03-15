import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProjectCard from './ProjectCard';
import ProjectDetailPage from './ProjectDetailPage';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div className="projects pure-g">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <Router>
                    <Route exact path='/ProjectDetailPage' component={ProjectDetailPage} />
                </Router>
            </div>
        );
    }
}

export default Projects;