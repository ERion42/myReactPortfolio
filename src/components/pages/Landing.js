import React from 'react';
import skyline from "./img/skyline.png";

export default function Landing() {
  return (
    <div>
      {/* <img id= "skyline" src={skyline} alt="Stock, to be replaced." />    */}

        {/* <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5 landingImage">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
            <button class="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
        </div> */}

        {/* <img src={skyline} width="100%" alt="Stock" /> */}

      <div class="jumbotron">
      <div class="container">
        <img id= "skyline" src={skyline} class="w-100 pt-3 pb-5" alt="Stock, to be replaced." />
        <h1 class="display-3">Web Design and Innovation!</h1>
        <p class="pb-3">If you want a front-end developer with years of experience both working with and leading individuals in a variety of fields and environments, I'm your guy.</p>
      </div>
    </div>
    <div class="container">
    {/* <!-- Example row of columns --> */}
    <div class="row">
      <div class="col-md-4">
        <h2>Communication</h2>
        <p>For the past decade I've been both working with and leading teams of capable individuals in jobs ranging from retail to the banking industry to technical and customer support. I can either lead or follow in order to create the best team synergy possible.</p>
      </div>
      <div class="col-md-4">
        <h2>Adaptive</h2>
        <p>The wide range of experiences I've had have given me a considerable array of skills. From customer service to technical support, I adapt quickly and excel at any work task I'm given. Staying flexible helps me work in different types of groups and settings and keeps things exciting.</p>
      </div>
      <div class="col-md-4">
        <h2>Web Development</h2>
        <p>Most of my experience has been in dealing with data servers by way of Microsoft Access or SQL Server. Lately I've fully immersed myself in a Full Stack Boot Camp course at Georgia Tech. In addition to skills ranging from basic HTML, CSS, and JavaScript, I've also learned to work in teams to build projects as well as how to handle the pressure of coding deadlines.</p>
      </div>
    </div>



  </div>

    </div>
  );
}
