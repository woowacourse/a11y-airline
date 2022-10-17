type HiddenButAriaReadProps = {
  children: string;
};

const HiddenButAriaRead: React.FC<HiddenButAriaReadProps> = ({
  children: ariaMessage,
}) => {
  return (
    <span
      className="hidden"
      aria-atomic
      aria-live="assertive"
      aria-relevant="additions"
    >
      {ariaMessage}
    </span>
  );
};

export default HiddenButAriaRead;
