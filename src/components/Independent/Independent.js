import React, { useState } from "react";
import "./independent.css";
import InLogo from "../../assets/ind.png";

const Independent = ({ isIndependent }) => {
  return (
    <div className="ind-container">
      <div className={isIndependent ? "opaque" : "transparent"}>
        <img src={InLogo} />
      </div>
      <h3>{isIndependent ? "Independent Nation" : "external territory"}</h3>
    </div>
  );
};

export default Independent;
