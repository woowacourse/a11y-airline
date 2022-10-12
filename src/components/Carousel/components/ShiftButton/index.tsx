import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import * as S from './index.style';

interface ShiftButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ShiftButton = ({ onClick, ...props }: ShiftButtonProps) => {
  return <S.Container onClick={onClick} {...props}></S.Container>;
};

export default ShiftButton;
