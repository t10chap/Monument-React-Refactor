import React from 'react';
import Header from './Header/Header.js';
import Archive from './Archive/Archive.js';
import About from './About/About.js';
import Gallery from './Gallery/Gallery.js';
import Contact from './Contact/Contact.js';

const blog = () => {
    return(
        <div>
            <Header />
            <Archive />
            <About />
            <Gallery />
            <Contact />
        </div>
    )
}

export default blog;