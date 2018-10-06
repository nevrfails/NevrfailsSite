import React from 'react';
import SiteFooter from '../../SiteFooter/SiteFooter';
import propTypes from 'prop-types';

export const ProjectDetails = ({projectTitle, projectType, projectDescription, projectTechnologyUsed}) => {
    return (
        <React.Fragment>
        <div className="project-details pure-u-1">
            <div className="project-feature-image-container">
            <div className="project-feature-image"></div>
            </div>
            <hgroup>
                <h3>{projectTitle}</h3>
                <h5>{projectType}</h5>
            </hgroup>
            <div className="project-desc">
                <h4>Project Description:</h4>
                <p>{projectDescription}</p>
            </div>
            <div className="project-detail-images">
                <div className="detail-image-container"></div>
                <div className="detail-image-container"></div>
            </div>
            <div className="project-technology-use">
                <h4>Technology Uses:</h4>
                <p>{projectTechnologyUsed}</p>
            </div>
            </div>
            <SiteFooter />
        </React.Fragment>
    );
};

ProjectDetails.propTypes = {
    projecttitle: propTypes.string,
    projecttype: propTypes.string,
    projectdescription: propTypes.string,
    projectdetails: propTypes.string,
    projectdechnologyUsed: propTypes.string,
    key: propTypes.string
}

