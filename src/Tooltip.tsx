import React, { PropsWithChildren } from "react";

interface TooltipProps {
  title: React.ReactNode;
}

function Tooltip({ children, title }: PropsWithChildren<TooltipProps>) {
  return (
    <>
      <div className="tooltip-trigger">
        {children}{" "}
        <div className="tooltip" role="tooltip">
          {title}
        </div>
      </div>
    </>
  );
}

export default Tooltip;
