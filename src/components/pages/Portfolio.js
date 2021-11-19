import React from 'react';
import BudgetTracker from "./img/Budget Tracker.png";
// import Refactor from "./img/Refactor.png";
import DateNightPicker from "./img/DateNightPicker.png";
import Scheduler from "./img/Scheduler.png";
import EventFinder from "./img/EventFinder.png";
import WorkoutTracker from "./img/WorkoutTracker.png";

export default function Portfolio() {
  return (
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
                <img id= "budgetTracker" src={BudgetTracker} class="d-block mx-auto" alt="..."></img>
                <div class="carousel-caption d-none d-md-block text-light bg-primary rounded-3">
                    <h2>Budget Tracker</h2>
                    <p>HTML, CSS, JavaScript, MongoDB</p>
                </div>                
            </div>
            <div class="carousel-item">
                <img id= "WorkoutTracker" src={WorkoutTracker} class="d-block mx-auto" alt="..."></img>
                <div class="carousel-caption d-none d-md-block text-light bg-primary rounded-3">
                    <h2>Workout Tracker</h2>
                    <p>HTML, CSS, Javascript, MongoDB</p>
                </div>        
            </div>
            <div class="carousel-item">
                <img id= "DateNightPicker" src={DateNightPicker} class="d-block mx-auto" alt="..."></img>
                <div class="carousel-caption d-none d-md-block text-light bg-primary rounded-3">
                    <h2>Project: Date Night</h2>
                    <p>HTML, CSS, JavaScript, Bootstrap, Server-Side APIs</p>
                </div>        
            </div>
            <div class="carousel-item">
                <img id= "Scheduler" src={Scheduler} class="d-block mx-auto" alt="..."></img>
                <div class="carousel-caption d-none d-md-block text-light bg-primary rounded-3">
                    <h2>Scheduler</h2>
                    <p>HTML, CSS, JavaScript, Local Storage</p>
                </div>        
            </div>            
            <div class="carousel-item">
                <img id= "EventFinder" src={EventFinder} class="d-block mx-auto" alt="..."></img>
                <div class="carousel-caption d-none d-md-block text-light bg-primary rounded-3">
                    <h2>Event Finder</h2>
                    <p></p>
                </div>        
            </div>        
        </div>
        <button class="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="false"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="false"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
  );
}
