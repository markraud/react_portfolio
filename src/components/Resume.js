import React from 'react';

import resume from '../other/ResumeMR.pdf';

function Resume() {
  return (
    <div>
      <div id="about" className="card  blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Resume</span>
          <p>Please download my resume by clicking <span><a href={resume} download > here.</a></span></p>
          <ul>
            <h6>Front-end Technologies:</h6>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>Materialize</li>
            <li>Bootstrap</li>
          </ul>
          <ul>
            <h6>Back-end Technologies:</h6>
            <li>Node.js</li>
            <li>React</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>Moongoose</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;