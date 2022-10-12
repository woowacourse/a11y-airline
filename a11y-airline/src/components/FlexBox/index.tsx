import styled, { css } from "styled-components";

import { FlexBoxProps } from "./type";

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  ${({ flexDirection, flexWrap, justifyContent, alignItems, gap }) => css`
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    gap: ${gap};
  `}
`;
