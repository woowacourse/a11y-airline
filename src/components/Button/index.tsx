import React from 'react';
import './Button.css';

const Button: React.FC<React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      className='button'
      onClick={onClick}
      aria-label={props['aria-label']}
      aria-live={props['aria-live']}
      aria-controls={props['aria-controls']}>
      {children}
    </button>
  );
};

export default Button;
