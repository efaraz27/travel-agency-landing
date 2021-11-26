import React from "react";
import DestinationCard from "../components/DestinationCard";
import DestinationImage1 from "../assets/destination-1.png";
import DestinationImage2 from "../assets/destination-2.png";
import DestinationImage3 from "../assets/destination-3.png";
import SpiralDecore from "../assets/Decore1.svg";

import "../styles/TopSelling.css";

function TopSelling() {
  return (
    <div className="top-selling">
      <div className="heading">Top Selling</div>
      <div className="punchline">Top Destinations</div>
      <div className="destination-cards">
        <DestinationCard
          image={DestinationImage1}
          destination={`Rome, Italy`}
          price={`$5,42k`}
          days={`10`}
        />
        <DestinationCard
          image={DestinationImage2}
          destination={`London, UK`}
          price={`$4,2k`}
          days={`12`}
        />
        <div className="last-card">
          <DestinationCard
            image={DestinationImage3}
            destination={`Full Europe`}
            price={`$15k`}
            days={`28`}
          />
          <img src={SpiralDecore} alt="" className="spiral-decore" />
        </div>
      </div>
    </div>
  );
}

export default TopSelling;
