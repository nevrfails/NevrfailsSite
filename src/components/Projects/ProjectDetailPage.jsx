import React, { Component } from 'react';

import ProjectImages from './ProjectImages';
import ProjectDetails from './ProjectDetails';

import 'antd/lib/carousel/style/index.css';  
import './ProjectDetailPage.css';

import firebase from 'firebase/app';
import 'firebase/database';

import {DB_CONFIG} from '../../firebase';

class ProjectDetailPage extends Component {
    constructor(props){
        super(props);

        this.app = firebase.initializeApp(DB_CONFIG);
        this.database = this.app.database().ref().child('projects');

        this.state = {
            projectDetails:[],
        }
    }
    componentWillMount(){
        const projectCard = this.state.projectDetails;
        const projectTitle = this.state.projectTitle;
        const projectType = this.state.projectType;
        const projectDescription = this.state.projectDescription;
        const projectTechnologyUsed = this.state.projectTechnologyUsed
        const projectId = this.state.projectId;

        this.database.on('child_added', snap => {
            projectCard.push({
                projectTitle: snap.val().title,
                projectType: snap.val().type,
                projectDescription: snap.val().description,
                projectTechnologyUsed: snap.val().toolsUsed,
                projectId: snap.key,
            })
            this.setState({
                projectId: projectId ,
                projectDescription: projectDescription,
                projectTechnologyUsed: projectTechnologyUsed,
                projectTitle: projectTitle ,
                projectType: projectType,
            })
        })
    }

    render() {
        return (
            <div className="pure-g">
                <ProjectImages />
                <div className="project-details">
                {
                    this.state.projectDetails.map((projectDetail) => { 
                    return (
                        <ProjectDetails 
                            projectTitle={projectDetail.projectTitle} 
                            projectType={projectDetail.projectType} 
                            projectDescription={projectDetail.projectDescription} 
                            projectTechnologyUsed={projectDetail.projectTechnologyUsed} 
                            projectDetailsId={projectDetail.id} 
                            key={projectDetail.id}
                        />
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

export default ProjectDetailPage;