import "./index.css";

interface Props {
  title: string;
  content: string;
}

const HelpToolTip = ({ title, content }: Props) => {
  return (
    <button
      className="tooltip w-9 p-1 border-2 border-dotted rounded-full border-gray-200 text-gray-300"
      type="button"
      role="tooltip"
      aria-label={`${title} ${content}`}
    >
      ?
      <div className="tooltip-content w-auto rounded bg-black text-white text-xs">
        {content}
      </div>
    </button>
  );
};

export default HelpToolTip;
