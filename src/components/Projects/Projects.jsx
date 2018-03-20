import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import firebase from 'firebase/app';
import 'firebase/database';

import {DB_CONFIG} from '../../firebase';

class Projects extends Component {

    constructor(props){
        super(props);

        this.app = firebase.initializeApp(DB_CONFIG);
        this.database = this.app.database().ref().child('projects');

        this.state = {
            projectCards:[],
        }
    }
    componentWillMount(){
        const projectCard = this.state.projectCards;
        const projectName = this.state.projectName;
        const projectType = this.state.projectType;
        const projectCardImage = this.state.projectCardImage;
        const projectId = this.state.projectId;

        this.database.on('child_added', snap => {
            projectCard.push({
                projectName: snap.val().title,
                projectType: snap.val().type,
                projectCardImage: snap.val().cardImage,
                projectId: snap.key,
            })
            this.setState({
                projectId: projectId ,
                projectName: projectName ,
                projectCardImage: projectCardImage,
                projectType: projectType,
            })
        })
    }

    render() {
        return (
            <div className="projects pure-g">
                    {
                        this.state.projectCards.map((projectCard) => { 
                        return(
                            <ProjectCard projectCardImage={projectCard.projectCardImage} projectName={projectCard.projectName} projectType={projectCard.projectType} projectCardId={projectCard.id} key={projectCard.id}/>
                            );
                        })
                    }
            </div>
        );
    }
}

export default Projects;