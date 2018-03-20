import React, { Component } from 'react';

import PropTypes from 'prop-types';

class ProjectDetails extends Component {
    constructor (props){
        super(props);
        this.projectTitle = props.projectTitle;
        this.projectType = props.projectType;
        this.projectDescription = props.projectDescription ;
        this.projectTechnologyUsed = props.projectTechnologyUsed;
        this.projectDetailsId = props.projectDetailsId;
    }
    
    render(props){
        return (
            <div className="project-details pure-u-1">
                <hgroup>
                    <h3>{this.projectTitle}</h3>
                    <h5>{this.projectType}</h5>
                </hgroup>
                <div className="project-desc">
                    <h4>Project Description:</h4>
                    <p>{this.projectDescription}</p>
                </div>
                <div className="project-technology-use">
                    <h4>Technology Uses:</h4>
                    <p>{this.projectTechnologyUsed}</p>
                </div>
            </div>
        );
    };
};

ProjectDetails.PropTypes = {
    projectTitle: PropTypes.string,
    projectType: PropTypes.string,
    projectDescription: PropTypes.string,
    projectDetails: PropTypes.string,
    projectTechnologyUsed: PropTypes.string
}


export default ProjectDetails;