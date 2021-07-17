import paws from '../images/paws-4-yall.png'
import weather from '../images/weather-dashboard.jpg'
import workday from '../images/work-day-scheduler.jpg'
// import codeQuiz from '../images/code-quiz.jpg'
// import passwordGen from '../images/password-generator.jpg'
// import techBlog from '../images/tech-blog.jpg'

const Projects = [
    {
        title: 'Paws 4 Yall',
        img: paws,
        imgAlt: 'dog picture',
        link: 'https://paws4yall.herokuapp.com/',
        repo: 'https://github.com/markraud/pet-adoption',
    },
    {
        title: 'Weather Dashboard',
        img: weather,
        imgAlt: 'Weather Dashboard',
        link: 'https://markraud.github.io/weather-dashboard/',
        repo: 'https://github.com/markraud/weather-dashboard',
    },
    {
        title: 'Work Day Scheduler',
        img: workday,
        imgAlt: 'workday scheduler',
        link: 'https://markraud.github.io/work-day-scheduler/',
        repo: 'https://github.com/markraud/work-day-scheduler',
    },
]

export default Projects;