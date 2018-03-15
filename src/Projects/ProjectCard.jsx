import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ProjectCard.css';

class ProjectCard extends Component {
    render() {
        return (
            <div className="project-card pure-u-lg-1-3 pure-u-md-1-2 pure-u-1">
             <div className="project-card_inner">
                <Link href="/ProjectDetailPage" to="/ProjectDetailPage">
                        <hgroup>
                            <h2>Project Name</h2>
                            <h5>Project Type</h5>
                        </hgroup>
                </Link>
                </div>
            </div>
        );
    }
}

export default ProjectCard;