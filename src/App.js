import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive-min.css';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import React, { Component,Fragment } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {SiteHeader} from './components/SiteHeader/SiteHeader';
import {AboutMe} from './components/AboutMe/AboutMe';
import {Projects} from './components/Projects/Projects';
import {ProjectDetails} from './components/Projects/ProjectDetails/ProjectDetails';


// Font Awesome reference for the social media icons
fontawesome.library.add(brands);

class App extends Component {

  render() {
      
      const { panelOpen, projects, openPanelToggle, closePanelToggle, detailsPanelVisible, projectSelected } = this.props;
     
    return (
        <Router>
            <Fragment>
                <SiteHeader openPanelClickHandler = {openPanelToggle}/>
                <AboutMe panelOpen={panelOpen} closePanelClickHandler = {closePanelToggle} />
                <Projects projects ={projects} projectSelected = {projectSelected} />
                {projects.map((projectinfo,i) => {
                    return(
                        <ProjectDetails key = { i } projectFeatureImage = {projectinfo.projectFeatureImage} projectTitle={projectinfo.projectTitle} projectType = {projectinfo.projectType} projectDescription = {projectinfo.projectDescription} projectDetailImage1 ={projectinfo.projectDetailImages.image1}  projectDetailImage2 ={projectinfo.projectDetailImages.image2} projectToolsUsed = {projectinfo.projectToolsUsed} detailsPanelVisibleClickHandler = {detailsPanelVisible}/>
                    )
                })}
                
            </Fragment>
        </Router>
    );
  }
}

export default App;
