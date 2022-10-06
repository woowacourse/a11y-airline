import styled from 'styled-components';

type ControlButtonProps = {
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
  ariaControls: string;
  value: string;
};

const ControlButton = ({
  onClick,
  disabled,
  ariaLabel,
  ariaControls,
  value,
}: ControlButtonProps) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-disabled={disabled}
    >
      {value}
    </Button>
  );
};

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #e6e7ea;
  background-color: none;
  font-size: 20px;
  &:disabled {
    color: #e6e7ea;
  }
`;

export default ControlButton;
