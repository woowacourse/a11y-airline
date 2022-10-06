import { useState } from 'react';
import VoiceText from '../VoiceText';
import * as S from './index.style';

interface TooltipProps {
  name: string;
  content: string;
}

const Tooltip = ({ content, name }: TooltipProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <S.Container
        tabIndex={0}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onFocus={() => setIsHover(true)}
        onBlur={() => setIsHover(false)}
      >
        <S.Tooltip aria-hidden>?</S.Tooltip>
        {isHover && (
          <S.Content role="tooltip" aria-hidden>
            {content}
          </S.Content>
        )}
      </S.Container>
      <VoiceText aria-live="assertive">{isHover ? content : name}</VoiceText>
    </>
  );
};

export default Tooltip;
