import React from 'react';
import mark from '../images/mark.jpg'

function About() {
  return (
    <div>
      <div id="about" className="card  blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">About Me</span>
          <img src={mark} alt="mark raudenbush" id='mugshot' />
          <h6>Bio:</h6>
          <p>Hello, my name is Mark Raudenbush. I'm based out of Westminster, CO. I have skills in HTML, CSS, JavaScript,
            jQuery, Bootstrap, Materialize, Node.js, React, Express, MySQL and MongoDB. I have been working in information technology for
            about 20 years and have recently decided to add web development to my skill set. I am currently attending the
            University of Denver Coding Boot Camp.</p>
        </div>
      </div>
    </div>
  );
}

export default About;