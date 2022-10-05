import { useState } from 'react';
import * as S from './index.style';

interface TooltipProps {
  content: string;
}

const Tooltip = ({ content }: TooltipProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <S.Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <S.Tooltip>?</S.Tooltip>
      {isHover && <S.Content>{content}</S.Content>}
    </S.Container>
  );
};

export default Tooltip;
