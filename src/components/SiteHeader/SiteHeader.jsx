import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/nevrfails-Brand-IdentitySignature-Horizontal.svg';
import './SiteHeader.css';

class SiteHeader extends React.Component{
    render(){
        return (
        <div className='header'>
            <header>
                <a href='/'><img src={logo} className='nevrfails-logo' alt='logo'/></a>
                <nav>
                    <ul>
                        <li><Link href="/aboutMe" to="/aboutMe">about</Link></li>
                        <li><Link href="/contactMe" to="/contactMe">contact</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
        );
    }
}

export default SiteHeader;