import React from 'react';
import { Link } from 'react-router-dom';

import './BackToHome.css';

const BackToHome = () => {
    return(
        <div className="back-button">
            <Link to="/"> Back</Link>
        </div>
    ); 
}

export default BackToHome;