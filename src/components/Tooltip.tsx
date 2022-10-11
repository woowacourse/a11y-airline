import styled from 'styled-components';

const Tooltip = ({ onClick, ariaLabel }: ToolTipProps) => {
  return (
    <S.Button onClick={onClick} aria-label={ariaLabel}>
      ?
    </S.Button>
  );
};

interface ToolTipProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel: string;
}

const S = {
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    background-color: white;
    border: 3px solid gray;
    border-radius: 50%;
    color: gray;
    font-size: 1rem;
    font-weight: 600;
  `,
};

export default Tooltip;
