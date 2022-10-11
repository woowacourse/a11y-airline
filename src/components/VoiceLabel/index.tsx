import * as S from './index.style';

interface VoiceLabelProps {
  value: string;
  targetId: string;
  ariaLive?: 'off' | 'polite' | 'assertive';
}

const VoiceLabel = ({
  value,
  targetId,
  ariaLive = 'assertive',
}: VoiceLabelProps) => {
  return (
    <S.Container htmlFor={targetId} aria-live={ariaLive}>
      {value}
    </S.Container>
  );
};

export default VoiceLabel;
