import React from 'react';


function Nav() {

  return (

    < div >
      <nav>
        <div className="nav-wrapper  blue-grey darken-1">
          <a href="#!" className="brand-logo left">Mark Raudenbush</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/">About Me</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Resume</a></li>
          </ul>

        </div>
      </nav>
    </div >

  );

}

export default Nav;