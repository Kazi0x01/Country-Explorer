import React, { useState, useEffect } from "react";
import "./UnMember.css";
import UnLogo from "../../assets/un_logo.png";

const UnMember = ({ isMember }) => {
  return (
    <div className="um-container">
      <div className={isMember ? "opaque" : "transparent"}>
        <img src={UnLogo} />
      </div>
      <h3>{isMember ? "UN Member Nation" : "Not UN Member Nation"}</h3>
    </div>
  );
};

export default UnMember;
