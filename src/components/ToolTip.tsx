import styled from 'styled-components';

type ToolTipProps = {
  icon: string;
  ariaLabel: string;
  message: string;
  isOpenToolTip: boolean;
  toggleToolTip: () => void;
};

const ToolTip = ({
  icon = '?',
  ariaLabel,
  message,
  isOpenToolTip,
  toggleToolTip,
}: ToolTipProps) => {
  return (
    <>
      <ToolTipButton
        onClick={toggleToolTip}
        type="button"
        aria-expanded={isOpenToolTip}
        aria-label={ariaLabel}
      >
        {icon}
      </ToolTipButton>
      <HelpToggleMessage hidden={!isOpenToolTip}>
        <span>{message}</span>
        <HelpToggleCloseButton type="button" onClick={toggleToolTip} aria-label="닫기">
          x
        </HelpToggleCloseButton>
      </HelpToggleMessage>
    </>
  );
};

export default ToolTip;

const ToolTipButton = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1.5px solid #767676;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #767676;
`;
const HelpToggleMessage = styled.div`
  position: absolute;
  width: 80%;
  top: 30px;
  padding: 16px 12px 12px;
  border: 1px solid #00256c;
  border-radius: 1px;
  background-color: #fff;
  font-size: 14px;
  color: #00256c;
  &:after {
    border-color: #fff transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: ‘’;
    display: block;
    position: absolute;
    left: 35px;
    top: -7px;
    width: 0;
    z-index: 1;
  }
  &:before {
    border-color: #00256c transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: ‘’;
    display: block;
    position: absolute;
    left: 35px;
    top: -8px;
    width: 0;
    z-index: 0;
  }
`;
const HelpToggleCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  font-size: 16px;
  text-align: end;
`;
