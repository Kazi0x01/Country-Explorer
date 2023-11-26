import React from "react";
import "./FlagAndEmblem.css";

const FlagAndEmblem = ({ flagUrl, CoaUrl }) => {
  return (
    <div className="fna-container">
      <div className="flag-container">
        <img src={flagUrl} alt="Flag" />
        <h3>Flag</h3>
      </div>
      <div className="coa-container">
        <img src={CoaUrl} alt="Coat of Arms" />
        <h3>Coat of Arms</h3>
      </div>
    </div>
  );
};

export default FlagAndEmblem;
