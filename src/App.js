import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive-min.css';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import React, { Component } from 'react';


import {SiteHeader} from './components/SiteHeader/SiteHeader';
import {AboutMe} from './components/AboutMe/AboutMe';
import {Projects} from './components/Projects/Projects';
import {ProjectDetails} from './components/Projects/ProjectDetails/ProjectDetails';


// Font Awesome reference for the social media icons
fontawesome.library.add(brands);

class App extends Component {

  render() {
      
      const { panelOpen, projects, openPanelToggle, closePanelToggle, detailsPanel, detailsPanelOpen, detailsPanelClose } = this.props;
     
    return (
        <div className="App">
            <SiteHeader openPanelClickHandler = {openPanelToggle}/>
            <AboutMe panelOpen={panelOpen} closePanelClickHandler = {closePanelToggle} />
            <Projects projects ={projects} detailsPanelOpenClickHandler = {detailsPanelOpen}/>
            {projects.map((projectinfo, i) => {
                return(
                    <ProjectDetails detailsPanel={detailsPanel} key = { i } projectFeatureImage = {projectinfo.projectFeatureImage} projectTitle={projectinfo.projectTitle} projectType = {projectinfo.projectType} projectDescription = {projectinfo.projectDescription} projectDetailImage1 ={projectinfo.projectDetailImages.image1}  projectDetailImage2 ={projectinfo.projectDetailImages.image2} projectToolsUsed = {projectinfo.projectToolsUsed} detailsPanelCloseClickHandler = {detailsPanelClose}/>
                )
            })}
        </div>    
    );
  }
}

export default App;
