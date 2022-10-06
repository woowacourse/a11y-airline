import { PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './FlexContainer.module.css';

type SelfPositionType = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start';
type FlexDirectionType = 'column' | 'column-reverse' | 'row' | 'row-reverse';
type JustifyContentType = SelfPositionType | 'left' | 'normal' | 'right';
type AlignItemsType = SelfPositionType | 'baseline' | 'normal' | 'stretch';

type FlexContainer = {
  flexDirection: FlexDirectionType;
  justifyContent: JustifyContentType;
  alignItems: AlignItemsType;
  gap: 'small' | 'middle' | 'large';
};

const FlexContainer = ({ children, ...props }: PropsWithChildren<Partial<FlexContainer>>) => {
  return (
    <div
      className={classNames([
        styles.container,
        props.flexDirection ? styles[`flex-direction-${props.flexDirection}`] : '',
        props.justifyContent ? styles[`justify-content-${props.justifyContent}`] : '',
        props.alignItems ? styles[`align-items-${props.alignItems}`] : '',
        props.gap ? styles[`gap-${props.gap}`] : '',
      ])}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
