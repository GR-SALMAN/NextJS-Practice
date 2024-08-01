import React from "react";

function itemLayout({ children }) {
  return (
    <div className="flex gap-6">
      <div className="itemSidebar flex-column">
        <div>AMD</div>
        <div>Nvidia</div>
        <div>Intel</div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default itemLayout;
