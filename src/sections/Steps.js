import React from "react";
import Step1Image from "../assets/step-1.png";
import Step2Image from "../assets/step-2.png";
import Step3Image from "../assets/step-3.png";
import StepsHero from "../assets/steps-hero.png";
import Step from "../components/Step";
import "../styles/Steps.css";

function Steps() {
  return (
    <div className="steps-section">
      <div className="steps-wrapper">
        <div className="heading">Easy and Fast</div>
        <div className="punchline">Book your next trip in 3 easy steps</div>
        <div className="steps">
          <Step image={Step1Image} heading={"Choose Desination"} />
          <Step image={Step2Image} heading={"Make Payment"} />
          <Step image={Step3Image} heading={"Reach Airport on Selected Date"} />
        </div>
      </div>
      <div className="steps-hero-image">
        <img src={StepsHero} alt="" />
      </div>
    </div>
  );
}

export default Steps;
