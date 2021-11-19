import React from 'react';

export default function Portfolio() {
  return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://www.gamebanshee.com/images/sobipro/entries/993/img_gallery_28_993_img.jpg" class="d-block mx-auto" alt="..."></img>
                <div class="carousel-caption d-none d-md-block text-light bg-primary rounded-3">
                    <h2>Header</h2>
                    <p>Footer</p>
                </div>                
            </div>
            <div class="carousel-item">
                <img src="https://www.gamebanshee.com/images/sobipro/entries/993/img_gallery_30_993_img.jpg" class="d-block mx-auto" alt="..."></img>
                <div class="carousel-caption d-none d-md-block text-light bg-primary rounded-3">
                    <h2>Header</h2>
                    <p>Footer</p>
                </div>        
            </div>
            <div class="carousel-item">
                <img src="https://www.gamebanshee.com/images/sobipro/entries/993/img_gallery_29_993_img.jpg" class="d-block mx-auto" alt="..."></img>
                <div class="carousel-caption d-none d-md-block text-light bg-primary rounded-3">
                    <h2>Header</h2>
                    <p>Footer</p>
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
