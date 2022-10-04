import styled from 'styled-components';

const CircleButton = ({ children, disabled, onClick }: CircleButtonProps) => {
  return (
    <S.Button disabled={disabled} onClick={onClick}>
      {children}
    </S.Button>
  );
};

interface CircleButtonProps {
  children: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const S = {
  Button: styled.button`
    width: 2rem;
    height: 2rem;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 50%;
    font-size: 1.5rem;
  `,
};

export default CircleButton;
