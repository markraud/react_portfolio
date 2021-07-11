import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function ContentTabs({ currentPage, handlePageChange }) {
  return (
    <ul className='right'>
      <li>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
        // Check to see if the currentPage is `About` and set class name to 'right. Otherwise, also set it to "right"
        // className={currentPage === 'About' ? 'right' : 'right'}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
        // Check to see if the currentPage is `About` and set class name to 'right. Otherwise, also set it to "right"
        // className={currentPage === 'Portfolio' ? 'right' : 'right'}
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
        // Check to see if the currentPage is `About` and set class name to 'right. Otherwise, also set it to "right"
        // className={currentPage === 'Contact' ? 'right' : 'right'}
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
        // Check to see if the currentPage is `About` and set class name to 'right. Otherwise, also set it to "right"
        // className={currentPage === 'Resume' ? 'right' : 'right'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default ContentTabs;
