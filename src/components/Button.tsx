import { css } from '@emotion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const defaultButton = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  text-align: center;
  vertical-align: middle;
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button css={defaultButton} {...props}>
      {children}
    </button>
  );
};

export default Button;
