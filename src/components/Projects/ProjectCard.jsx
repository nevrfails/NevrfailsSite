import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ProjectCard.css';
import PropTypes from 'prop-types';

class ProjectCard extends Component {
    
    constructor(props){
        super(props);
        this.projectName = props.projectName;
        this.projectType = props.projectType;
        this.projectCardId = props.projectCardId;
        this.projectCardImage = props.projectCardImage;
    }
    render(props) {
        
        return (
            <div className="project-card pure-u-lg-1-3 pure-u-md-1-2 pure-u-1">
             <div className="project-card_inner" style={{backgroundImage: `url(${this.projectCardImage})`, backgroundSize:'cover'}}>
                <Link href="/projectDetailPage" to="/projectDetailPage" >
                        <hgroup>
                            <h2>{this.projectName}</h2>
                            <h5>{this.projectType}</h5>
                        </hgroup>
                </Link>
                </div>
            </div>
        );
    }
}

ProjectCard.propTypes = {
    projectCardImage: PropTypes.string,
    projectName: PropTypes.string,
    projectType: PropTypes.string
}


export default ProjectCard;