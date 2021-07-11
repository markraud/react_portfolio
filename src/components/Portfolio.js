import React from 'react';

import Project from './Project'

function Portfolio() {
  return (
    <div>
      <div id="about" className="card  blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Portfolio</span>
          <p>Hello from the portfolio page.</p>
          <Project />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;