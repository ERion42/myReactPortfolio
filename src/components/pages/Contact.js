import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container id="contactSection">
      {/* Header section */}
      <Row className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Contact Me</h1>
        <p className="fs-5 text-muted">Want to get ahold of the creative mind that made this website and the others listed within it? There are options!</p>
      </Row>

      {/* Contact Information */}
      <Row className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        
        {/* GitHub */}
        <Col>
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3 text-white bg-primary border-primary">
              <h4 className="my-0 fw-normal">GitHub</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title"><a href="https://github.com/ERion42" target="_blank" rel="noreferrer">ERion42</a></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>See all my projects</li>
                <li>Give direct feedback</li>
              </ul>
            </div>
          </div>
        </Col>

        {/* LinkedIn */}
        <Col>
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3 text-white bg-primary border-primary">
              <h4 className="my-0 fw-normal">LinkedIn</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title"><a href="https://www.linkedin.com/in/eric-rion-97096166/" target="_blank" rel="noreferrer">Eric Rion</a></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Follow me professionally</li>
                <li>Message me for quick contact</li>
              </ul>
            </div>
          </div>
        </Col>
        {/* Email */}
        <Col>
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3 text-white bg-primary border-primary">
              <h4 className="my-0 fw-normal">Email</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title"><a href="mailto: erion3k@gmail.com">erion3k</a></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Email me directly</li>
                <li>Another good way to reach me</li>
              </ul>
              {/* <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button> */}
            </div>
          </div>
        </Col>
      </Row>

      {/* Phone */}
      <Col>
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3 text-white bg-primary border-primary text-center">
              <h4 className="my-0 fw-normal">Phone</h4>
            </div>
            <div className="card-body text-center">
              <h1 className="card-title pricing-card-title">404-542-6049</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Contact me directly</li>
                <li>If you get my voicemail just leave a message</li>
              </ul>
            </div>
          </div>
        </Col>
    </Container>
  );
}
