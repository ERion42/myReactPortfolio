import React from 'react';
// import { Navbar, Container } from 'react-bootstrap';
import '../App.css';

const Footer = () => {
    return (

        <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark mt-5" id="myFooter">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                   
                </a>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li> */}
                        <li className="nav-item">
                            <span className="nav-link">Copyright 2022</span>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )

}

export default Footer;
