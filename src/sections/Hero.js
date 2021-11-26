import React from "react";
import Navbar from "../components/Navbar";
import blob from "../assets/blob.svg";
import heroImage from "../assets/hero-image.png";
import underline from "../assets/underline.png";
import playButton from "../assets/play-button.png";
import "../styles/Hero.css";

function Hero() {
  return (
    <div className="Hero">
      <img className="blob" src={blob} alt="blob" />
      <Navbar />
      <div className="hero-contents">
        <div className="description">
          <div className="tagline">Best Destinations around the world</div>
          <div className="punchline">
            Travel, <span className="enjoy">enjoy</span>{" "}
            <img className="underline" src={underline} alt="underline" /> and
            live a new and full life
          </div>
          <div className="desc">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </div>
          <div className="buttons">
            <div className="yellow-btn">Find out more</div>
            <div className="play-button">
              <img src={playButton} alt="play" />
              Play Demo
            </div>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Hero img" />
      </div>
    </div>
  );
}

export default Hero;
