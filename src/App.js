import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive-min.css';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import React, { Component,Fragment } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {SiteHeader} from './components/SiteHeader/SiteHeader';
import {AboutMe} from './components/AboutMe/AboutMe';
import {Projects} from './components/Projects/Projects';
//import ProjectDetailPage from './components/Projects/ProjectDetailPage';
//import ProjectNavigation from './components/SiteHeader/ProjectNavigation';


// Font Awesome reference for the social media icons
fontawesome.library.add(brands);

class App extends Component {

  render() {
      let aboutMeShowing;

      if (this.props.panelOpen){
          aboutMeShowing = <AboutMe />;
      }
      const { projects, openPanelToggle } = this.props;
    return (
        <Router>
            <Fragment>
                <SiteHeader openPanelClickHandler = {openPanelToggle}/>
                {aboutMeShowing}  
                <Projects projects ={projects} />
            </Fragment>
        </Router>
    );
  }
}

export default App;
