import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/nevrfails-Brand-IdentitySignature-Horizontal.svg';
import './SiteHeader.css';

import ProjectNavigation from './ProjectNavigation';

class SiteHeader extends React.Component{
    render(){
        return (
        <div className='header'>
            <header>
                <a href='/'><img src={logo} className='nevrfails-logo' alt='logo'/></a>
                <nav>
                    <ul>
                        <li><Link href="/" to="/">about</Link></li>
                        <li><Link href="/" to="/">contact</Link></li>
                    </ul>
                </nav>
            </header>
            <ProjectNavigation />
        </div>
        );
    }
}

export default SiteHeader;