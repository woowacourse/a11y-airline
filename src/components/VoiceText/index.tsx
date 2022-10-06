import { AriaAttributes, HTMLAttributes, ReactNode } from 'react';
import * as S from './index.style';

interface VoiceTextProps
  extends AriaAttributes,
    HTMLAttributes<HTMLParagraphElement> {
  children: string | ReactNode;
}

const VoiceText = ({ children, ...props }: VoiceTextProps) => {
  return <S.Container {...props}>{children}</S.Container>;
};

export default VoiceText;
