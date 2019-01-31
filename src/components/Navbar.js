import React from "react";

function Navbar() {
return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="./Home">Greenfield Pack</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="./">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./pages/About.js">About Us</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="./About">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/EliasX801">Twitch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/xELIASx801">Twitter</a>
        </li> */}
      </ul>
        <a href="./Login"><button type="button" className="btn btn-primary">Log In</button></a>
    </div>
  </nav>
);
}


export default Navbar;
