import React from "react";
import "./StatsCard.css";

const StatsCard = ({ imgSrc, field, value }) => {
  return (
    <div className="stats-container">
      <img className="stats-img" src={imgSrc} alt="Stat Icon" />

      <h3>
        {field} : {value}
      </h3>
    </div>
  );
};

export default StatsCard;
