import { useState } from "react";

interface InputSpinnerProps {
  defaultValue?: number;
  step?: number;
  min?: number;
  max?: number;
  labelText?: string;
  subButtonText?: string;
  addButtonText?: string;
}

function InputSpinner({
  defaultValue = 0,
  step = 1,
  min = 0,
  max = 100,
  labelText = "",
  subButtonText = "줄이기",
  addButtonText = "늘리기",
}: InputSpinnerProps) {
  const [value, setValue] = useState(defaultValue);
  const [ariaLiveText, setAriaLiveText] = useState("");

  const handleClickSub: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (value - step < min) return;
    setValue((value) => {
      setAriaLiveText(`${labelText} 감소 ${value - step}`);
      return value - step;
    });
  };

  const handleClickAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (value + step > max) return;
    setValue((value) => {
      setAriaLiveText(`${labelText} 추가 ${value + step}`);
      return value + step;
    });
  };

  return (
    <div className="passenger__control">
      <button
        className="passenger__control-sub"
        onClick={handleClickSub}
        aria-disabled={value - step < min}
      >
        {subButtonText}
      </button>
      <input
        className="passenger__control-input"
        type="tel"
        value={value}
        readOnly
      />
      <button
        className="passenger__control-add"
        onClick={handleClickAdd}
        aria-disabled={value + step > max}
      >
        {addButtonText}
      </button>
      <div className="sr-only" aria-live="polite">
        {ariaLiveText}
      </div>
    </div>
  );
}

export default InputSpinner;
