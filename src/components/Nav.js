import React from 'react';
// import'./Nav.css';
import ContentTabs from './ContentTabs';

function Nav() {

  return (

    < div >
      <nav>
        <div className="nav-wrapper  blue-grey darken-1">
          <a href="#!" className="brand-logo left">Mark Raudenbush</a>
          {/* <br></br> */}
          <ContentTabs />
          {/* <ul className="right hide-on-med-and-down">
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contact">Resume</a></li>
          </ul> */}
        </div>
      </nav>
    </div >

  );

}

export default Nav;