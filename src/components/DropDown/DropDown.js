import React from "react";

const DropDown = ({ Suggestions }) => {
  return (
    <select>
      {Suggestions.map((sug) => {
        return <option>{sug}</option>;
      })}
    </select>
  );
};
export default DropDown;
