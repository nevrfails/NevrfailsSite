import React from 'react';
import './ProjectCard.css';

export default props => (
    <div className = "project-card" onClick={props.projectSelected}>
        <div className = "project-card_inner" style = {{backgroundImage: `url(${props.projectfeatureimage})`, backgroundSize: 'cover'}}>
        <div className="overlay"></div>
            <hgroup >
            <h2> {props.projecttitle}</h2> 
            <h5> {props.projecttype}</h5> 
            </hgroup> 
        </div> 
        
    </div> 
)
