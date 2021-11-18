import React from 'react';
import skyline from "./img/red_skyline.png";

export default function Landing() {
  return (
    <div>
      <h1>Home Page</h1>
      <div style={{ height: '10%' }}>
        <img id= "skyline" src={skyline} alt="Stock, to be replaced." />   
      </div>
    </div>
  );
}
