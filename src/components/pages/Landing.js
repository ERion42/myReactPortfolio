import React from 'react';
import skyline from "./img/skyline.png";
import { Container, Row, Col } from 'react-bootstrap';

export default function Landing() {
  return (
    <div>

      <div className="jumbotron">
        <img id= "skyline" src={skyline} className="w-100 pt-3 pb-5" alt="Stock, to be replaced." />
      </div>

      {/* Need to standardize the height of the text boxes */}
      <Container>
        <Row>
          <Col md="4">
            <h2>Communication</h2>
            <p>For the past decade I've been both working with and leading teams of capable individuals in jobs ranging from retail to the banking industry to technical and customer support. I can either lead or follow in order to create the best team synergy possible.</p>
          </Col>
          <Col md="4">
            <h2>Adaptive</h2>
            <p>The wide range of experiences I've had have given me a considerable array of skills. From customer service to technical support, I adapt quickly and excel at any work task I'm given. Staying flexible helps me work in different types of groups and settings and keeps things exciting.</p>
          </Col>
          <Col md="4">
            <h2>Web Development</h2>
            <p>Most of my experience has been in dealing with data servers by way of Microsoft Access or SQL Server. Lately I've fully immersed myself in a Full Stack Boot Camp course at Georgia Tech. In addition to skills ranging from basic HTML, CSS, and JavaScript, I've also learned to work in teams to build projects as well as how to handle the pressure of coding deadlines.</p>
          </Col>
        </Row>
      </Container>
    

    </div>
  );
}
