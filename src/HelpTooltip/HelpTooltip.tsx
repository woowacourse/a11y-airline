/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { Valueof } from '../@types';
import { PASSENGER_TYPE } from '../constants';
import { baseInfoStyle, buttonStyle, layoutStyle, tooltipMessageStyle } from './HelpTooltip.styles';

interface HelpTooltipProps {
  baseInfo: string;
  passengerType: Valueof<typeof PASSENGER_TYPE>;
  tooltipMessage: string;
}

function HelpTooltip({ passengerType, tooltipMessage, baseInfo }: HelpTooltipProps) {
  const [openTooltip, setOpenTooltip] = useState(false);

  const handleClickHelp = () => setOpenTooltip((prev) => !prev);

  return (
    <div css={layoutStyle}>
      <span css={baseInfoStyle}>{baseInfo}</span>
      <button
        css={buttonStyle}
        onClick={handleClickHelp}
        aria-label={`${passengerType} 기준 상세 안내 ${tooltipMessage}`}
      >
        ?
      </button>
      {openTooltip && (
        <span css={tooltipMessageStyle} aria-hidden={true} role="tooltip">
          {tooltipMessage}
        </span>
      )}
    </div>
  );
}

export default HelpTooltip;
