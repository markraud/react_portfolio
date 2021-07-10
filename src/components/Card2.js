import React from 'react';

import weather from '../images/weather-dashboard.jpg';

export default function Card() {
  return (
    <div>
      <div className="row">
        <div className="col s12 m8 l8 offset-l2 offset-m2">
          <div className="card center-align">
            <div className="card-image">
              {/* <img src="assets/images/paws-4-yall.png" alt='dogs' /> */}
              <img src={weather} alt='weather application' />
            </div>
            <div className="card-content grey lighten-2">
              <span className="card-title">Weather Dashboard</span>
              <p>This is a simple weather dashboard application. You are able to enter a city to receive
                current and future weather information.</p>
            </div>
            <div className="card-action">
              <a className="blue-text" href="https://markraud.github.io/weather-dashboard/">Website</a>
              <a className="blue-text" href="https://github.com/markraud/weather-dashboard">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
