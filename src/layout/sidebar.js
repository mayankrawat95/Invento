import React from "react";

function sidebarComponent() {
  return (
    <aside className="sidebar">
      <div className="flex__between">
        <h3>Filter</h3> <button className="btn">Clear</button>
      </div>
    </aside>
  );
}

export default sidebarComponent;
