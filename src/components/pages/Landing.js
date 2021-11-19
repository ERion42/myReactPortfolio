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
        <img id= "skyline" src={skyline} class="w-100" alt="Stock, to be replaced." />
        <h1 class="display-3">Hello, world!</h1>
        <p>Must go faster... go, go, go, go, go! So you two dig up, dig up dinosaurs? So you two dig up, dig up dinosaurs? Jaguar shark! So tell me - does it really exist? Must go faster... go, go, go, go, go! Just my luck, no ice. I was part of something special.</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
      </div>
    </div>
    <div class="container">
    {/* <!-- Example row of columns --> */}
    <div class="row">
      <div class="col-md-4">
        <h2>Heading</h2>
        <p>Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! So you two dig up, dig up dinosaurs? You really think you can fly that thing? Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
      </div>
      <div class="col-md-4">
        <h2>Heading</h2>
        <p>Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Life finds a way. What do they got in there? King Kong? Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
      </div>
      <div class="col-md-4">
        <h2>Heading</h2>
        <p>Life finds a way. They're using our own satellites against us. And the clock is ticking. Yes, Yes, without the oops! You really think you can fly that thing? Must go faster. Checkmate... What do they got in there? King Kong? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
      </div>
    </div>



  </div>

    </div>
  );
}
