import React from 'react';

// object destructuring assignment to pull our variables from the props object
// assign variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <section className="container">
      <div class="row mt-3 mb-3">
        <div className="col-sm">
          <h1>Eric Rion</h1>
        </div>
        <ul className="nav nav-pills col-lg offset-md-1 justify-content-end">
          <li className="nav-item">
            <a
              href="#landing"
              onClick={() => handlePageChange('Landing')}
              // conditional operator that checks to see if the current page is "Landing"
              // If it is, set the current page to 'nav-link-active', otherwise set it to "nav-link"
              className={currentPage === 'Landing' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              // Check if the currentPage is `About`, and so use the active link class from bootstrap
              // Otherwise set it to a normal nav-link
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              // Check to see if currentPage is "Portfolio", if so use the active link class from bootstrap. 
              //Otherwise set it to a normal nav-link
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              // Check to see if currentPage is "Contact", if so we use the active link class from bootstrap
              //Otherwise set it to a normal nav-link
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li classname="nav-item">
            <a href="https://github.com/ERion42/portfolioRedesign/raw/main/img/Rion%20Eric%202021%20Customer%20Service%20Resume.pdf" target="_blank" rel="noreferrer" onclick={() => handlePageChange('Resume')}
            //
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NavTabs;
