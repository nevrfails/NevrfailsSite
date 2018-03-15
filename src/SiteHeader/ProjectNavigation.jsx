import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectNavigation.css';

class ProjectNavigation extends Component {
    render() {
        return (
            <div className="project-navigation">
                <nav>
                    <ul>
                        <li><Link href="/" to="/">All</Link></li>
                        <li><Link href="/" to="/">UI/UX</Link></li>
                        <li><Link href="/" to="/">Branding</Link></li>
                        <li><Link href="/" to="/">Web</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default ProjectNavigation;