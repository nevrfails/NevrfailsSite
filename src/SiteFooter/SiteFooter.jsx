import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SiteFooter.css';

const HowCanIHelpYou = () => {
    return(
        <div className="help-section pure-u-1">
            <h2>How Can I Help You?</h2>
            <Link to='/' className="pure-button">Let's Get Connected Now!</Link>
        </div>
    );
};

class SiteFooter extends Component {
    render() {
        return (
            <div className="site-footer">
                <HowCanIHelpYou />
            </div>
        );
    }
}

export default SiteFooter;