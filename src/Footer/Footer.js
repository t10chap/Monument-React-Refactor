import React from 'react';
import './Footer.css';
import {SocialIcon} from 'react-social-icons';

const footer = () => {
    return(
        <footer>
		    <div className="wrap">
                <div className="social-links">
                    <SocialIcon className="facebook" url="https://www.facebook.com" />
                    <SocialIcon className="instagram" url="https://www.instagram.com" />
                    <SocialIcon className="twitter" url="https://www.twitter.com" />
                </div>
                <input type="text" placeholder="Email Address" />
                <button type="submit">Keep in Touch</button>
		    </div>
		    <p className="copyright">&copy;2016 Sarah Holden</p>
	    </footer>
    )
}

export default footer;