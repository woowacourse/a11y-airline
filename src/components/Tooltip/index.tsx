import { useState } from 'react';
import VoiceText from '../VoiceText';
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
      <S.Tooltip aria-hidden>?</S.Tooltip>
      {isHover && <S.Content role="tooltip">{content}</S.Content>}
      <VoiceText>{content}</VoiceText>
    </S.Container>
  );
};

export default Tooltip;
