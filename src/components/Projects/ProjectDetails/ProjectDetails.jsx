import React from 'react';
//import SiteFooter from '../../SiteFooter/SiteFooter';
import './ProjectDetails.css';
import propTypes from 'prop-types';


export const ProjectDetails = ({projectFeatureImage, projectTitle, projectType, projectDescription, projectDetailImage1, projectDetailImage2, projectToolsUsed, detailsPanelVisibleClickHandler, selectedProject, detailsPanelVisible}) => {
   
    let detailClasses = 'project-details-container';
   if(detailsPanelVisible){
     detailClasses = 'project-details-container open';
   }
    return (
        <React.Fragment>
        <div className={detailClasses}>
            <div className="project-details pure-u-1">
                <div className="project-feature-image-container">
                <button className="close-btn" onClick={detailsPanelVisibleClickHandler}><div className="close-btn__icon">+</div></button>
                    <div className="project-feature-image" style = {{backgroundImage:'url('+ projectFeatureImage +')'}}></div>
            </div>
            <div className="project-details__content">
                <hgroup>
                    <h3>{projectTitle}</h3>
                    <h5>{projectType}</h5>
                </hgroup>
                <div className="project-desc">
                    <h4>Project Description:</h4>
                    <p>{projectDescription}</p>
                </div>
                <div className="project-detail-images">
                    <div className="detail-image-container image1" style = {{backgroundImage:'url('+ projectDetailImage1 +')'}}></div>
                    <div className="detail-image-container image2" style = {{backgroundImage:'url('+ projectDetailImage2 +')'}}></div>
                </div>
                <div className="project-technology-use">
                    <h4>Technology Uses:</h4>
                    <p>{projectToolsUsed}</p>
                </div>
                </div>
                </div>
            </div>
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

