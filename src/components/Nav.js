import React from 'react';

export default function Nav() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper  blue-grey darken-1">
          <a href="#about" className="brand-logo left">Mark Raudenbush</a>
          <a href="#mobile-demo" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#about">About Me</a></li>
            <li><a href="#mywork">My Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <ul id="mobile-demo" className="sidenav blue-grey lighten-2 sidenav-close" >
        <li><a href="#about">About Me</a></li>
        <li><a href="#mywork">My Work</a></li>
        <li><a href="#contact">Conact</a></li>
      </ul>
    </div>

  );

}
