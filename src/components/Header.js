import React from 'react';
import Nav from './Nav';

function Header() {

  return (

    < div >
      <div className="nav-wrapper  blue-grey darken-1">
        <a href="#!" className="brand-logo left">Mark Raudenbush</a>
        <Nav />
      </div>
    </div >

  );

}

export default Header;