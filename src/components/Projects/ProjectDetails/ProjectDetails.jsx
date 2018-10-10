import React, {Fragment} from 'react';
//import SiteFooter from '../../SiteFooter/SiteFooter';
import './ProjectDetails.css';
import propTypes from 'prop-types';


export const ProjectDetails = props => {
    let detailClasses = 'project-details-container';
   if(props.detailsPanel){
     detailClasses = 'project-details-container show';
   }
    return (
        <Fragment key = {props.key}>
            <div className={detailClasses}>
                <div className="project-details pure-u-1">
                    <div className="project-feature-image-container">
                    <button className="close-btn" onClick={props.detailsPanelCloseClickHandler}><div className="close-btn__icon">+</div></button>
                        <div className="project-feature-image" style = {{backgroundImage:'url('+ props.projectFeatureImage +')'}}></div>
                </div>
                <div className="project-details__content">
                    <hgroup>
                        <h3>{props.projectTitle}</h3>
                        <h5>{props.projectType}</h5>
                    </hgroup>
                        <div className="project-desc">
                            <h4>Project Description:</h4>
                            <p>{props.projectDescription}</p>
                        </div>
                        <div className="project-detail-images">
                            <div className="detail-image-container image1" style = {{backgroundImage:'url('+ props.projectDetailImage1 +')'}}></div>
                            <div className="detail-image-container image2" style = {{backgroundImage:'url('+ props.projectDetailImage2 +')'}}></div>
                        </div>
                        <div className="project-technology-use">
                            <h4>Technology Uses:</h4>
                            <p>{props.projectToolsUsed}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
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

