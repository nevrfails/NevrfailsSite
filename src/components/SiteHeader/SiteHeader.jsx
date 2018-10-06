import React from 'react';
import logo from '../../assets/nevrfails-Brand-IdentitySignature-Horizontal.svg';
import './SiteHeader.css';

export const SiteHeader = props => {
    return (
    <div className='header'>
        <header>
            <a href='/'><img src={logo} className='nevrfails-logo' alt='logo'/></a>
            <nav>
                <button onClick={props.openPanelClickHandler}>about</button>
            </nav>
        </header>
    </div>
    );
}

