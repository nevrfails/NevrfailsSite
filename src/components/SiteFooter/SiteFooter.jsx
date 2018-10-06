import React from 'react';
//import {Link} from 'react-router-dom';
import './SiteFooter.css';

const LetsConnect = () => {
    return (
        <div className="help-section pure-u-1">
            <button className="pure-button">Let's Connected Now!</button>
        </div>
    );
};
const SiteFooter = () => {
    return (
        <div className="site-footer">
            <LetsConnect />
        </div>
    );
}
export default SiteFooter;
