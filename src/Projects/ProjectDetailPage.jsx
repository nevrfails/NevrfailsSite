import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetailPage.css';

const ProjectFeatureImage = () => {
    return (
        <div>
            <h1>Feature Image here</h1>
        </div>
    );
};

const ProjectDetails = () => {
    return (
        <div className="project-details pure-u-1">
            <hgroup>
                <h3>Project Title</h3>
                <h5>Project Type</h5>
            </hgroup>
            <div className="project-desc">
                <h4>Project Description:</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, enim sed soluta perferendis dolor, repellat porro voluptas delectus eos facere ab, architecto eum molestiae veniam maiores voluptatum nobis doloremque deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure et mollitia perspiciatis animi repellendus aut, voluptates magnam maxime rerum possimus rem facilis, assumenda odit quam accusamus minima pariatur quia eius.</p>
            </div>
            <div className="project-technology-use">
                <h4>Technology Uses:</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, quis. Officia, maiores culpa! Nam sunt iure corporis itaque dolorum totam asperiores odio laborum magni repudiandae! Iste nesciunt error dolor eaque!</p>
            </div>
        </div>
    );
};



class ProjectDetailPage extends Component {
    render() {
        return (
            <div className="pure-g">
                <ProjectFeatureImage />
                <ProjectDetails />
            </div>
        );
    }
}

export default ProjectDetailPage;