import { useState } from "react";

interface InputSpinnerProps {
  defaultValue?: number;
  step?: number;
  min?: number;
  max?: number;
}

function InputSpinner({
  defaultValue = 0,
  step = 1,
  min = 0,
  max = 100,
}: InputSpinnerProps) {
  const [value, setValue] = useState(defaultValue);

  const handleClickSub: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (value - step < min) return;
    setValue((value) => value - step);
  };

  const handleClickAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (value + step > max) return;
    setValue((value) => value + step);
  };

  return (
    <div className="passenger__control">
      <button className="passenger__control-sub" onClick={handleClickSub} />
      <input className="passenger__control-input" value={value} readOnly />
      <button className="passenger__control-add" onClick={handleClickAdd} />
    </div>
  );
}

export default InputSpinner;
