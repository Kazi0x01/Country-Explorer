import React, { useState, useEffect } from "react";
import "./TimeDisplay.css";

const TimeDisplay = ({ timezone }) => {
  const getCurrentTime = () => {
    if (timezone === "UTC") {
      const utcTime = new Date();
      return utcTime.toLocaleTimeString("en-US", {
        timeZone: "UTC",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    }

    const [utcSign, utcHours, utcMinutes] = timezone
      .match(/([+-])(\d{2}):(\d{2})/)
      .slice(1);
    const offset =
      (parseInt(utcHours, 10) * 60 + parseInt(utcMinutes, 10)) *
      (utcSign === "+" ? 1 : -1);

    const utcTime = new Date();
    const localTime = new Date(utcTime.getTime() + offset * 60 * 1000);

    return localTime.toLocaleTimeString();
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="time-container">
      <h2>Current Time:</h2>
      <p>{currentTime}</p>
    </div>
  );
};

export default TimeDisplay;
