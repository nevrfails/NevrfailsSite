import React, { Fragment, Component} from 'react';

import ProjectCard from './ProjectCard/ProjectCard';
import SiteFooter from '../SiteFooter/SiteFooter'

import './Projects.css';

export class Projects extends Component {
    
    render() {
    const { projects } = this.props;
    console.log(projects)    
    return (
            <Fragment>
                <div className = "projects">
                    <header> <h2> Projects </h2> </header>
                    <div className = "card-container">
                    {projects.map((project) => {
                        return (
                            <ProjectCard key = { project.id } projectfeatureimage = { project.projectFeatureImage } projecttitle = { project.projectTitle } projecttype = { project.projectType } />
                            );    
                        })
                    }
                    </div>
                    <SiteFooter />
                </div>
            </Fragment>
            )
        }
}