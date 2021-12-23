// Set up dependencies
import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Landing from './pages/Landing';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer';

// Modularize PortfolioContainer
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Landing');

  // check the value of `currentPage` - return the corresponding component to render
  const renderPage = () => {
    if (currentPage === 'Landing') {
      return <Landing />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* passing currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* calling renderPage method which will return a component  */}
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}
