import React from 'react';
// import projects from './Project'

// import paws from '../images/paws-4-yall.png'
// import weather from '../images/weather-dashboard.jpg'
// import workday from '../images/work-day-scheduler.jpg'
// import codeQuiz from '../images/code-quiz.jpg'
// import passwordGen from '../images/password-generator.jpg'
// import techBlog from '../images/tech-blog.jpg'

function Portfolio({ Projects }) {
  return (
    <div>
      <div className="card  blue-grey darken-1">
        <div className="card-content white-text">
          <h4>Portfolio</h4>
          {/* map through the projects */}
          {Projects.map((project) => (
            <div className="blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{`${project.title}`}</span>
                {/* <img src={project.img} className="portfolioImages" alt={project.imgAlt} />
                <div>
                  <a href={`${project.link}`} class='portfolioLinks'>Link to Site</a> <br>
                  </br>
                  <a href={project.repo} class='portfolioLinks'>GitHub Repo</a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;