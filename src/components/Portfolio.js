import React from 'react';
import paws from '../images/paws-4-yall.png'
import weather from '../images/weather-dashboard.jpg'
import workday from '../images/work-day-scheduler.jpg'

function Portfolio() {
  return (
    <div>
      <div className="card  blue-grey darken-1">
        <div className="card-content white-text">
          <h4>Portfolio</h4>

          <div className="blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Paws 4 Y'all!</span>
              <img src={paws} className="portfolioImages" alt="Paws for yall" />
              <div>
                <a href="https://paws4yall.herokuapp.com/">Link to Site</a> <br>
                </br>
                <a href="https://github.com/markraud/pet-adoption">GitHub Repo</a>
              </div>
            </div>
          </div>

          <div className="blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Weather Dashboard</span>
              <img src={weather} className="portfolioImages" alt="Weather Dashboard" />
              <div>
                <a href="https://markraud.github.io/weather-dashboard/">Link to Site</a> <br>
                </br>
                <a href="https://github.com/markraud/weather-dashboard">GitHub Repo</a>
              </div>
            </div>
          </div>

          <div className="blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Work Day Scheduler</span>
              <img src={workday} className="portfolioImages" alt="Work Day Scheduler" />
              <div>
                <a href="https://markraud.github.io/work-day-scheduler/">Link to Site</a> <br>
                </br>
                <a href="https://github.com/markraud/work-day-scheduler">GitHub Repo</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Portfolio;