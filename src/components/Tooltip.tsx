import React, { useState, PropsWithChildren } from "react";

interface TooltipProps {
  title: React.ReactNode;
}

function Tooltip({ children, title }: PropsWithChildren<TooltipProps>) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleTriggerClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setTooltipOpen((prev) => !prev);
  };

  const handleCloseButtonClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setTooltipOpen(false);
  };

  return (
    <>
      <button
        className="tooltip-trigger question-mark-button"
        aria-expanded={tooltipOpen}
        onClick={handleTriggerClick}
      >
        {children}
      </button>
      <div className="tooltip" role="tooltip">
        <div className="tooltip-content">
          {title}
          <button className="tooltip__close" onClick={handleCloseButtonClick}>
            닫기
          </button>
        </div>
      </div>
    </>
  );
}

export default Tooltip;
