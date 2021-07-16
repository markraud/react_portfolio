import React from 'react';
import bear from '../images/bear-lake.jpg'

function Home() {
  return (
    <div>
      <div id="about" className="card  blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Welcome to my portfolio built using React</span>
          {/* <img src={bear} alt="bear-lake" /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;