import React, { useState } from 'react';
import ContentTabs from './ContentTabs';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import { BrowserRouter as Router, Route } from 'react-router-dom';



function Content() {
  const [currentPage, setCurrentPage] = useState('About');


  //determine which page to render
  // const renderPage = () => {
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Portfolio') {
  //     console.log(currentPage);
  //     return <Portfolio />;
  //   }
  //   if (currentPage === 'Contact') {
  //     return <Contact />;
  //   }
  //   return <Resume />;
  // };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
      <div>
        <ContentTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* {renderPage()} */}


        <Route path="/" component={About} />
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Resume" component={Resume} />



      </div>
    </Router>
  );
}

export default Content;