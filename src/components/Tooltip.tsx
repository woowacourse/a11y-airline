import styled from 'styled-components';

const Tooltip = () => {
  return (
    <>
      <S.Question>?</S.Question>
      <S.StyledTooltip id='tooltip' role={'tooltip'}>
        국민은행 61210204071715로 후원해 결식아동을 도와보세요!
      </S.StyledTooltip>
    </>
  );
};

const S = {
  Question: styled.span`
    width: 20px;
    height: 20px;
    border: 1px solid #cbcbcb;
    color: #cbcbcb;
    border-radius: 50%;
    text-align: center;
    cursor: help;

    &:hover + [role='tooltip'],
    &:focus + [role='tooltip'] {
      visibility: visible !important;
      background-color: red;
    }
  `,
  StyledTooltip: styled.div`
    visibility: ${(props) => (props.role === 'tooltip' ? 'hidden' : 'none')};

    position: absolute;
    top: -3rem;
    left: 4rem;
    padding: 4px;
    color: white;
  `,
};

export default Tooltip;
