import React from 'react';
import { Link } from 'react-router-dom';

import './BackToHome.css';

function BackToHome(){
    return(
        <div className="back-button">
            <Link to="/"> &#9664; Back</Link>
        </div>
    ); 
}

export default BackToHome;