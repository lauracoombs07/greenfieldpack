import React from "react";

import './Slideshow.css';


function Slideshow() {
return(

    <div class="container">
    
    
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="fielddog.jpg" class="d-block w-100" alt="Dogs in Field"/>
    </div>
    <div class="carousel-item">
      <img src="kidspets.jpg" class="d-block w-100" alt="Pets and Kids"/>
    </div>
    <div class="carousel-item">
      <img src="safety.jpg" class="d-block w-100" alt="Safe Fencing" />
    </div>
    <div class="carousel-item">
      <img src="kennel.jpg" class="d-block w-100" alt="Kennels" />
    </div>
    <div class="carousel-item">
      <img src="home.jpg" class="d-block w-100" alt="Home" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <hr class="my-4"></hr>
</div>
</div>
);
}


export default Slideshow;

            