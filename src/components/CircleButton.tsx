import styled from 'styled-components';

const CircleButton = ({ value, ariaLabel, disabled, onClick }: CircleButtonProps) => {
  return (
    <S.Button aria-label={ariaLabel} disabled={disabled} onClick={onClick}>
      {value}
    </S.Button>
  );
};

interface CircleButtonProps {
  value: string;
  ariaLabel: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  [props: string]: any;
}

const S = {
  Button: styled.button`
    width: 2rem;
    height: 2rem;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 50%;
    font-size: 1.5rem;
    text-align: center;
  `,
};

export default CircleButton;
