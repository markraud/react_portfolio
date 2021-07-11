import React from 'react';

import resume from '../other/ResumeMR.pdf';

export default function Contact() {
  return (
    <div>
      <div id="contact" className="card blue-grey darken-1">
        <div className="row">
          <div className="col s12 m12 center-align">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
              </div>
              <div className="card-action">
                <a href="tel:3037252585" className="waves-effect waves-light btn blue-grey darken-3"><i className="fa fa-phone fa-2x" />(303) 725-2585</a>
                <a href="mailto:markraud@hotmail.com" className="waves-effect waves-light btn blue-grey darken-3"><i className="fa fa-envelope-square fa-2x" />markraud@hotmail.com</a>
                <a href={resume} download className="waves-effect waves-light btn blue-grey darken-3"><i className="fa fa-file-pdf-o"><span id="resume" className="card-title white-text">Resume</span></i></a>
                <a href="https://www.linkedin.com/in/markraudenbush/" className="waves-effect waves-light btn blue-grey darken-3" target="_blank" rel="noreferrer"><i className="fa fa-linkedin fa-2x" /></a>
                <a href="https://github.com/markraud" className="waves-effect waves-light btn blue-grey darken-3" target="_blank" rel="noreferrer"><i className="fa fa-github fa-2x" /></a>
                {/* <a href="#" class="waves-effect waves-light btn">This is a link</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
