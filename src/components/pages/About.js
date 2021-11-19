import React from 'react';
import selfPortrait from "./img/lenoreAndMe.png";
import wifeAndMe from "./img/crissyAndMe.png";

export default function About() {
  return (
    <div>
        {/* <div class="col-3 menu leftBox">
          <h1 id="bio">About Me</h1>
        </div>
        <div class="col-9 menu rightBox bio">
          <img id= "selfPortrait" src={selfPortrait} alt="This is my cat and me in my office." />          
          <p>My name is Eric Rion and I'm a web developer that lives in the suburbs outside of Atlanta, Ga. with my wife and our cat, Lenore.</p>
          <p>I attended Georgia State University and got a BA in Psychology with a minor in Sociology. Unsurprisingly I have not done anything with that degree since I did not want to continue in academia. With a degree that wasn't really opening any doors I moved back to something that was more interesting- coding.</p>
          <p>I've been moving in and out of the tech sector since I graduated high school. I received my A+ certification and worked off and on with coding, but between college and the other jobs I picked up I never really dedicated it to myself.</p>
          <p>I am currently enrolled in the Full Stack Coding Boot Camp and plan to get a job as a front end junior developer once I complete the course.</p>
          <img id="wifeAndMe" src={wifeAndMe} alt="My wife, Crissy, and I on our latest trip to Stone Mountain." />
        </div> */}

        <section class="container">
          <div class="row align-items-center">
            <div class="col" >
                  <p>My name is Eric Rion and I'm a web developer that lives in the suburbs outside of Atlanta, Ga. with my wife and our cat, Lenore.</p>

                  <p>I attended Georgia State University and got a BA in Psychology with a minor in Sociology. Unsurprisingly I have not done anything with that degree since I did not want to continue in academia. With a degree that wasn't really opening any doors I moved back to something that was more interesting- coding.</p>
                  
                  <p>I've been moving in and out of the tech sector since I graduated high school. I received my A+ certification and worked off and on with coding, but between college and the other jobs I picked up I never really dedicated it to myself.</p>
                  
                  <p>I am currently enrolled in the Full Stack Coding Boot Camp and plan to get a job as a front end junior developer once I complete the course.</p>
            </div>
            <div class="col-lg">
              <img id= "selfPortrait" src={selfPortrait} alt="This is my cat and me in my office." class="img-fluid" /> 
            </div>
          </div>
        </section>
    </div>
  );
}
