import React from "react";

function topBarComponent() {
  return (
    <div className="top__bar">
      <ul className="tabs">
        <li className="active">Everything</li>
        <li>Live Action</li>
        <li>Eligibility for auction</li>
        <li>Buy now Only</li>
      </ul>

      <div className="form__group">
        Sory By:
        <select>
          <option>Lowest Price</option>
          <option>Highest Price</option>
          <option>Relevance</option>
          <option>Recommended</option>
        </select>
      </div>
    </div>
  );
}

export default topBarComponent;
