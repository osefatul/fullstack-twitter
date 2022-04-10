import React from "react";

function SidebarLink({ Icon, text }) {
  return (
    <div
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation `}
    >
      <Icon className="h-7" />
      <span className="hidden xl:inline">{Text}</span>
    </div>
  );
}

export default SidebarLink;
