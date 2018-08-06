import React from 'react';
import Article from './Article/Article.js';
import AboutUs from './AboutUs/AboutUs.js';
import './MidSection.css';

const midsection = () => {
    return(
        <div className="wrap grid-wrapper">
            <Article />
            <AboutUs />
        </div>
    )
}

export default midsection;