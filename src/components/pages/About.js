import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import selfPortrait from "./img/lenoreAndMe.png";
import '../../App.css';

export default function About() {
  return (

    <Container id="aboutSection" fluid="lg">
      <Row className='p-5'>
        <Col lg="8">
          <p>My name is Eric Rion and I'm a web developer that lives in the suburbs outside of Atlanta, Ga. with my wife and our cat, Lenore.</p>

          <p>I attended Georgia State University and got a BA in Psychology with a minor in Sociology. Unsurprisingly I have not done anything with that degree since I did not want to continue in academia. With a degree that wasn't really opening any doors I moved back to something that was more interesting- coding.</p>
              
          <p>I've been moving in and out of the tech sector since I graduated high school. I received my A+ certification and worked off and on with coding, but between college and the other jobs I picked up I never really dedicated it to myself. Recently, however, I've discovered how much more fulfilling it is to work with web development. I've got some pretty great customer service skills, but I've got the type of soul that can't be satisfied unless I'm creating something.</p>
             
          <p>I have recently completed a Full Stack Coding Boot Camp and I am currently practicing old skills, learning new ones, and seeking employment as a junior front-end developer.</p>
        </Col>

        <Col lg="4">
          <img id= "selfPortrait" src={selfPortrait} alt="This is my cat and me in my office." className="img-fluid" />
        </Col>
      </Row>

    </Container>



  );
}
