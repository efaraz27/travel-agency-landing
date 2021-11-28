import React from "react";
import "../styles/Step.css";

function Step(props) {
  return (
    <div className="step-wrapper">
      <img src={props.image} alt="" className="step-image" />
      <div className="step-details">
        <div className="step-heading">{props.heading}</div>
        <div className="step-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
          tempus.
        </div>
      </div>
    </div>
  );
}

export default Step;
