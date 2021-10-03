import { ChangeEventHandler } from "react";

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
  max: number;
  min: number;
  statusMessage: string;
}

const SpinButton = ({ value, onChange, onBlur, onIncrease, onDecrease, max, min, statusMessage }: Props) => {
  return (
    <div>
      <button type="button" style={{ fontSize: "20px" }} onClick={onDecrease} aria-label="성인 탑승자 한 명 줄이기">
        -
      </button>
      <input
        type="number"
        title="성인 탑승객 수"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        max={max}
        min={min}
        style={{ fontSize: "20px" }}
      />
      <button type="button" style={{ fontSize: "20px" }} onClick={onIncrease} aria-label="성인 탑승자 한 명 늘리기">
        +
      </button>
      <div role="status" style={{ width: 0, height: 0, overflow: "hidden" }}>
        {statusMessage}
      </div>
    </div>
  );
};

export default SpinButton;
