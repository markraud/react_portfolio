import React from 'react';
import paws from '../images/paws-4-yall.png'
import weather from '../images/weather-dashboard.jpg'
import workday from '../images/work-day-scheduler.jpg'
import codeQuiz from '../images/code-quiz.jpg'
import passwordGen from '../images/password-generator.jpg'
import techBlog from '../images/tech-blog.jpg'


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
                <a href="https://paws4yall.herokuapp.com/" class='portfolioLinks'>Link to Site</a> <br>
                </br>
                <a href="https://github.com/markraud/pet-adoption" class='portfolioLinks'>GitHub Repo</a>
              </div>
            </div>
          </div>

          <div className="blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Weather Dashboard</span>
              <img src={weather} className="portfolioImages" alt="Weather Dashboard" />
              <div>
                <a href="https://markraud.github.io/weather-dashboard/" class='portfolioLinks'>Link to Site</a> <br>
                </br>
                <a href="https://github.com/markraud/weather-dashboard" class='portfolioLinks'>GitHub Repo</a>
              </div>
            </div>
          </div>

          <div className="blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Work Day Scheduler</span>
              <img src={workday} className="portfolioImages" alt="Work Day Scheduler" />
              <div>
                <a href="https://markraud.github.io/work-day-scheduler/" class='portfolioLinks'>Link to Site</a> <br>
                </br>
                <a href="https://github.com/markraud/work-day-scheduler" class='portfolioLinks'>GitHub Repo</a>
              </div>
            </div>
          </div>

          <div className="blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Code Quiz Challenge</span>
              <img src={codeQuiz} className="portfolioImages" alt="Code Quiz Challenge" />
              <div>
                <a href="https://markraud.github.io/code-quiz/" class='portfolioLinks'>Link to Site</a> <br>
                </br>
                <a href="https://github.com/markraud/code-quiz" class='portfolioLinks'>GitHub Repo</a>
              </div>
            </div>
          </div>

          <div className="blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Password Generator</span>
              <img src={passwordGen} className="portfolioImages" alt="Password Generator" />
              <div>
                <a href="https://markraud.github.io/password-generator/" class='portfolioLinks'>Link to Site</a> <br>
                </br>
                <a href="https://github.com/markraud/password-generator" class='portfolioLinks'>GitHub Repo</a>
              </div>
            </div>
          </div>

          <div className="blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Tech Blog</span>
              <img src={techBlog} className="portfolioImages" alt="Tech Blog" />
              <div>
                <a href="https://pure-falls-13112.herokuapp.com/" class='portfolioLinks'>Link to Site</a> <br>
                </br>
                <a href="https://github.com/markraud/tech-blog" class='portfolioLinks'>GitHub Repo</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Portfolio;