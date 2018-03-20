import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

class SocialMedia extends Component {
    render() {
        return (
            
            <div className='pure-u-1 social-icons'>
             <Link href='https://www.linkedin.com/in/herstonfails' to='https://www.linkedin.com/in/herstonfails' target='_blank' className="pure-u-1-4"><FontAwesomeIcon icon={["fab","linkedin"]}/></Link>
             <Link href='https://www.facebook.com/herston.fails' to='https://www.facebook.com/herston.fails' target='_blank'  className="pure-u-1-4"><FontAwesomeIcon icon={["fab","facebook"]}/></Link>
             <Link href='https://www.instagram.com/nevrfails/' to='https://www.instagram.com/nevrfails/' target='_blank'  className="pure-u-1-4"><FontAwesomeIcon icon={["fab","instagram"]}/></Link>
             <Link href='https://twitter.com/nevrfails' to='https://twitter.com/nevrfails' target='_blank'  className="pure-u-1-4"><FontAwesomeIcon icon={["fab","twitter"]}/></Link>
             </div>
        );
    }
}

export default SocialMedia;