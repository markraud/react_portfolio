import React from 'react';
import ContentTabs from './ContentTabs';


function Nav() {

  return (

    < div >
      <nav>
        <div className="nav-wrapper  blue-grey darken-1">
          <a href="#!" className="brand-logo left">Mark Raudenbush</a>
          <ContentTabs />
          {/* <ul className="right hide-on-med-and-down">
            <li><a href="#about">About Me</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Resume</a></li>
          </ul> */}

        </div>
      </nav>
    </div >

  );

}

export default Nav;