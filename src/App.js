import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar.js';
import Footer from './Footer/Footer.js';
// import Blog from './Blog/Blog.js';
import Index from './Index/Index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
       <Index />
       {/* <Blog/> */}
       <Footer />
      </div>
    );
  }
}

export default App;
