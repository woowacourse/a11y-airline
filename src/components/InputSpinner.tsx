import { useState } from "react";

interface InputSpinnerProps {
  defaultValue?: number;
  step?: number;
  min?: number;
  max?: number;
  labelText?: string;
  subButtonText?: string;
  addButtonText?: string;
  inputId?: string;
}

function InputSpinner({
  defaultValue = 0,
  step = 1,
  min = 0,
  max = 100,
  labelText = "",
  subButtonText = "줄이기",
  addButtonText = "늘리기",
  inputId,
}: InputSpinnerProps) {
  const [value, setValue] = useState(defaultValue);
  const [ariaLiveText, setAriaLiveText] = useState("");

  const handleClickSub: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (value - step < min) {
      alert("최소값에 도달하여 사용할 수 없음");
      return;
    }
    setValue((value) => {
      setAriaLiveText(`${labelText} 감소 ${value - step}`);
      return value - step;
    });
  };

  const handleClickAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (value + step > max) {
      alert("최대값에 도달하여 사용할 수 없음");
      return;
    }
    setValue((value) => {
      setAriaLiveText(`${labelText} 추가 ${value + step}`);
      return value + step;
    });
  };

  return (
    <div className="input-spinner-container">
      <button
        className="input-spinner-sub"
        onClick={handleClickSub}
        aria-disabled={value - step < min}
      >
        {subButtonText}
      </button>
      <input
        className="input-spinner-input"
        type="tel"
        value={value}
        id={inputId}
        readOnly
      />
      <button
        className="input-spinner-add"
        onClick={handleClickAdd}
        aria-disabled={value + step > max}
      >
        {addButtonText}
      </button>
      <div className="sr-only" role="status">
        {ariaLiveText}
      </div>
    </div>
  );
}

export default InputSpinner;
