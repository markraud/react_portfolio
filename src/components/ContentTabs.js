import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function ContentTabs({ currentPage, handlePageChange }) {
  return (
    <ul className='right'>
      <li>
        <a href="#about" onClick={() => handlePageChange('About')}>About</a>
      </li>
      <li>
        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
      </li>
      <li>
        <a href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
      </li>
      <li>
        <a href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
      </li>
    </ul>
  );
}

export default ContentTabs;
