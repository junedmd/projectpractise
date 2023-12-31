import "./Navbar.css";
import React from 'react'

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary ">
  <div class="container-fluid ">
    <a class="navbar-brand text-light" href="#">Hospital-Admine-Pro</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li class="nav-item ">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
