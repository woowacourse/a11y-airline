import { PASSENGER_VALUE } from "../constants/common";

interface Props {
  value: number;
  min: number;
  max: number;
  statusMessage: string;
  onIncrease: () => void;
  onDecrease: () => void;
}

const SpinButton = ({
  value,
  min,
  max,
  statusMessage,
  onIncrease,
  onDecrease,
}: Props): JSX.Element => {
  return (
    <div className="flex justify-center items-center">
      <button
        className="flex justify-center items-center w-4 h-4 rounded-full ring-1 ring-gray-300 p-3 text-2xl focus:outline-none focus:ring focus:ring-blue-300"
        onClick={onDecrease}
        aria-label="성인 탑승자 한명 줄이기"
      >
        <span className="mb-1">-</span>
      </button>
      <input
        className="w-8 mx-2 text-center text-2xl font-bold border-b-2 border-black"
        type="number"
        role="spinbutton"
        inputMode="numeric"
        value={value}
        min={min}
        max={max}
      />
      <button
        className="flex justify-center items-center w-4 h-4 rounded-full ring-1 ring-gray-300 p-3 text-2xl focus:outline-none focus:ring focus:ring-blue-300"
        onClick={onIncrease}
        aria-label="성인 탑승자 한명 늘리기"
      >
        <span className="mb-1">+</span>
      </button>
      <div className="w-0 h-0 overflow-hidden" role="status">
        {statusMessage}
      </div>
    </div>
  );
};

export default SpinButton;
