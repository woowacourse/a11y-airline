import React from 'react';

type SpinnerButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'onClick' | 'tabIndex'
>;

const dispatchChangeEvent = (inputElement: HTMLInputElement) => {
  inputElement.dispatchEvent(new Event('change', { bubbles: true }));
};

const useSpinButton = (inputRef: React.RefObject<HTMLInputElement>) => {
  const stepDown = (value?: number) => {
    if (!inputRef.current) return;

    inputRef.current.stepDown(value);
    dispatchChangeEvent(inputRef.current);
  };

  const stepUp = (value?: number) => {
    if (!inputRef.current) return;

    inputRef.current.stepUp(value);
    dispatchChangeEvent(inputRef.current);
  };

  const DownButton = (props: SpinnerButtonProps) => (
    <button
      type="button"
      onClick={() => {
        stepDown();
      }}
      {...props}
    />
  );

  const UpButton = (props: SpinnerButtonProps) => (
    <button
      type="button"
      onClick={() => {
        stepUp();
      }}
      {...props}
    />
  );

  return { DownButton, UpButton };
};

export default useSpinButton;
