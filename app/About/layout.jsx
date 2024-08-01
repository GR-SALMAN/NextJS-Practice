import React from "react";

function layout({ children }) {
  return (
    <div className="About-Section flex">
      <div className="AboutNav ">Location | Number</div>
      <hr />
      <div className="aboutChild">{children}</div>
    </div>
  );
}

export default layout;
