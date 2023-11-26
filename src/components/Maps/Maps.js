import React, { useState, useEffect } from "react";
import "./Maps.css";

const Maps = ({ lat, lng }) => {
  const uri = process.env.REACT_APP_EMBED_API_URL + `?lat=${lat}&lng=${lng}`;

  return (
    <div>
      <div style={{ height: "400px", width: "100%" }}>
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={uri}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
