import "./index.css";

interface Props {
  content: string;
}

const HelpToolTip = ({ content }: Props) => {
  return (
    <button
      className="tooltip w-9 p-1 border-2 rounded-full border-gray-200 text-gray-300"
      type="button"
      role="tooltip"
      aria-label="연령 기준 안내"
    >
      ?
      <div className="tooltip-content w-auto rounded bg-black text-white text-xs">
        {content}
      </div>
    </button>
  );
};

export default HelpToolTip;
