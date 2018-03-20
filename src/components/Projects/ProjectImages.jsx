import React, { Component } from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';

class ProjectImages extends Component{
    constructor(props){
        super(props);
        this.projectImageId = props.projectImageId;
        this.projectImages = props.projectImages;
    }

render (){
    return(
        <Carousel autoplay className="pure-u-1 project-images">
            <div className="project-image"><img src={this.projectImages} alt=""/></div>
            <div className="project-image"><img src={this.projectImage2} alt=""/></div>
            <div className="project-image"><img src={this.projectImage3} alt=""/></div>
            <div className="project-image"><img src={this.projectImage4} alt=""/></div>
        </Carousel>
        );        
    };
};

//Prototypes

ProjectImages.PropTypes = {
    projectImages: PropTypes.string

}

export default ProjectImages;