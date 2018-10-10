import React, { Fragment, Component} from 'react';

import ProjectCard from './ProjectCard/ProjectCard';
import SiteFooter from '../SiteFooter/SiteFooter'

import './Projects.css';

export class Projects extends Component {
    
    // constructor(props){
    //     super(props);
    // }

    render() {
    const { projects, detailsPanelOpenClickHandler } = this.props;
    return (
            <Fragment key={this.props.key}>
                <div className = "projects">
                    <header> <h2> Projects </h2> </header>
                    <div className = "card-container">
                    {projects.map((project, i) => {
                        return (
                            <ProjectCard detailsPanelOpenClickHandler = {detailsPanelOpenClickHandler} key = { i } projectfeatureimage = { project.projectFeatureImage } projecttitle = { project.projectTitle } projecttype = { project.projectType } />
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