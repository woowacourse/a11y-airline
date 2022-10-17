import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import * as S from './index.style';

interface ShiftButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isDisable: boolean;
}

const ShiftButton = ({ onClick, isDisable, ...props }: ShiftButtonProps) => {
  return (
    <S.Container
      onClick={onClick}
      isDisable={isDisable}
      {...props}
    ></S.Container>
  );
};

export default ShiftButton;
