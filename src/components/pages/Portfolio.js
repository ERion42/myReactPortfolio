import React from 'react';
import BudgetTracker from "./img/Budget Tracker.png";
// import Refactor from "./img/Refactor.png";
import DateNightPicker from "./img/DateNightPicker.png";
import Scheduler from "./img/Scheduler.png";
import EventFinder from "./img/EventFinder.png";
import WorkoutTracker from "./img/WorkoutTracker.png";
import arrowL from "./img/arrowL.png";
import arrowR from "./img/arrowR.png";

export default function Portfolio() {
  return (
    <section class="container">
        <div class="row">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={BudgetTracker} class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block text-light bg-primary rounded-3">
                        <h2>Budget Tracker</h2>
                        <p>HTML, CSS, JavaScript, MongoDB</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={WorkoutTracker} class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block text-light bg-primary rounded-3">
                        <h2>Workout Tracker</h2>
                        <p>HTML, CSS, Javascript, MongoDB</p>
                    </div>  
                </div>
                <div class="carousel-item">
                    <img src={DateNightPicker} class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block text-light bg-primary rounded-3">
                        <h2>Project: Date Night</h2>
                        <p>HTML, CSS, JavaScript, Bootstrap, Server-Side APIs</p>
                    </div>   
                </div>
                <div class="carousel-item">
                    <img src={Scheduler} class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block text-light bg-primary rounded-3">
                        <h2>Scheduler</h2>
                        <p>HTML, CSS, JavaScript, Local Storage</p>
                    </div>   
                </div>
                <div class="carousel-item">
                    <img src={EventFinder} class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block text-light bg-primary rounded-3">
                        <h2>Project: Event Finder</h2>
                        <p>HTML, CSS, JavaScript, APIs</p>
                    </div>   
                </div>
            </div>
            {/* Arrow Controls */}
            <button class="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                <span class="text-dark">
                    <img id="arrowL" src={arrowL}></img>
                </span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon visually-hidden" aria-hidden="false"></span>
                <span class="visually-hidden">Next</span>
                <span class="text-dark">
                    <img id="arrowR" src={arrowR}></img>
                </span>
            </button>
        </div>
        </div>
    </section>
  );
}
