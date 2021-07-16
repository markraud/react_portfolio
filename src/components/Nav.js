import React from 'react';

import { Link } from 'react-router-dom';

function Nav() {

  return (

    < div >
      <nav>
        <div className="nav-wrapper  blue-grey darken-1">
          <a href="#!" className="brand-logo left">Mark Raudenbush</a>
          <ul className="right">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Resume">Resume</Link> </li>
          </ul>

        </div>
      </nav>
    </div >

  );

}

export default Nav;