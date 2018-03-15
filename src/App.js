import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive-min.css';

import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SiteHeader from './SiteHeader/SiteHeader';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
import Projects from './Projects/Projects';
import ProjectDetailPage from './Projects/ProjectDetailPage';
import SiteFooter from './SiteFooter/SiteFooter';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
          <SiteHeader />
          <Route exact path='/ProjectDetailPage' component={ProjectDetailPage} />
            <Route exact path='/' component={Projects} />
            <Route exact path='/' component={AboutMe} />
            <Route exact path='/' component={ContactMe} />
            <SiteFooter />
          </div>
        </Router>
    );
  }
}

export default App;