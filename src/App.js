import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive-min.css';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SiteHeader from './components/SiteHeader/SiteHeader';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Projects from './components/Projects/Projects';
import ProjectDetailPage from './components/Projects/ProjectDetailPage';
import SiteFooter from './components/SiteFooter/SiteFooter';
import ProjectNavigation from './components/SiteHeader/ProjectNavigation';
import BackToHome from './components/SiteHeader/BackToHome';

// Font Awesome reference for the social media icons
fontawesome.library.add(brands);

class App extends Component {
  constructor(props){
      super(props);

      
  }


  render() {
    return (
        <Router>
            <Switch>
                <div>
                    <SiteHeader />
                    <Route path='/' exact component={ProjectNavigation}/>
                    <Route path='/(aboutMe|projectDetailPage|conactMe)' component={BackToHome} />
                    <Route exact path='/' component={Projects}/>
                    <Route exact path='/projectDetailPage' component={ProjectDetailPage} />
                    <Route exact path='/aboutMe' component={AboutMe} />
                    <Route exact path='/contactMe' component={ContactMe} />
                    <SiteFooter />
                </div>
                </Switch>
        </Router>
    );
  }
}

export default App;