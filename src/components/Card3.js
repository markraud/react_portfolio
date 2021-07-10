import React from 'react';

import workday from '../images/work-day-scheduler.jpg';

export default function Card() {
  return (
    <div>
      <div className="row">
        <div className="col s12 m8 l8 offset-l2 offset-m2">
          <div className="card center-align">
            <div className="card-image">
              {/* <img src="assets/images/paws-4-yall.png" alt='dogs' /> */}
              <img src={workday} alt='workday application' />
            </div>
            <div className="card-content grey lighten-2">
              <span className="card-title">Work Day Scheduler</span>
              <p>This is a work day scheduler that allows you to enter activities/tasks and it saves them to
                local storage.</p>
            </div>
            <div className="card-action">
              <a className="blue-text" href="https://markraud.github.io/work-day-scheduler/">Website</a>
              <a className="blue-text" href="https://github.com/markraud/work-day-scheduler">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
