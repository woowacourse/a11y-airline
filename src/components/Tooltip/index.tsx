import './Tooltip.css';

type TooltipProps = {
  description: string;
};

const Tooltip: React.FC<TooltipProps> = ({ description }) => {
  return (
    <button className='tooltip' aria-describedby='TIP_TEL' aria-label='성인이란'>
      ?
      <span className='description' id='TIP_TEL' role='tooltip'>
        {description}
      </span>
    </button>
  );
};

export default Tooltip;
