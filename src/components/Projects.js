import React from 'react';
import paws from '../images/paws-4-yall.png'
import weather from '../images/weather-dashboard.jpg'
import workday from '../images/work-day-scheduler.jpg'
import codeQuiz from '../images/code-quiz.jpg'
import passwordGen from '../images/password-generator.jpg'
import techBlog from '../images/tech-blog.jpg'

export default function Project() {
    return (
        <div>
            <div className="card  blue-grey darken-1">
                <div className="card-content white-text">
                    <h4>Portfolio</h4>
                    <div id="about" className="card  blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Paws 4 Y'all!</span>
                            <img src={paws} alt="Paws for yall" class='portfolioImages' />
                            <div>
                                <a href='https://paws4yall.herokuapp.com/' class='portfolioLinks'>Link to Site</a> <br>
                                </br>
                                <a href='https://github.com/markraud/pet-adoption' class='portfolioLinks'>GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

            <div id="about" className="card  blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Weather Dashboard</span>
                    <img src={weather} alt="weather dashboard" class='portfolioImages' />
                    <div>
                        <a href='https://markraud.github.io/weather-dashboard/' class='portfolioLinks'>Link to Site</a> <br>
                        </br>
                        <a href='https://github.com/markraud/weather-dashboard' class='portfolioLinks'>GitHub Repo</a>
                    </div>
                </div>
            </div >

            <div id="about" className="card  blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Work Day Scheduler</span>
                    <img src={workday} alt="work day scheduler" class='portfolioImages' />
                    <div>
                        <a href='https://markraud.github.io/work-day-scheduler/' class='portfolioLinks'>Link to Site</a> <br>
                        </br>
                        <a href='https://markraud.github.io/work-day-scheduler/' class='portfolioLinks'>GitHub Repo</a>
                    </div>
                </div>
            </div >

            <div id="about" className="card  blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Code Quiz</span>
                    <img src={codeQuiz} alt="code quiz" class='portfolioImages' />
                    <div>
                        <a href='https://markraud.github.io/code-quiz/' class='portfolioLinks'>Link to Site</a> <br>
                        </br>
                        <a href='https://github.com/markraud/code-quiz' class='portfolioLinks'>GitHub Repo</a>
                    </div>
                </div>
            </div >
            <div id="about" className="card  blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Password Generator</span>
                    <img src={passwordGen} alt="password generator" class='portfolioImages' />
                    <div>
                        <a href='https://github.com/markraud/password-generator' class='portfolioLinks'>Link to Site</a> <br>
                        </br>
                        <a href='https://markraud.github.io/password-generator/' class='portfolioLinks'>GitHub Repo</a>
                    </div>
                </div>
            </div >
            <div id="about" className="card  blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Tech Blog</span>
                    <img src={techBlog} alt="tech blog" class='portfolioImages' />
                    <div>
                        <a href='https://pure-falls-13112.herokuapp.com/' class='portfolioLinks'>Link to Site</a> <br>
                        </br>
                        <a href='https://github.com/markraud/tech-blog' class='portfolioLinks'>GitHub Repo</a>
                    </div>
                </div>
            </div >




        </div>
    );
}