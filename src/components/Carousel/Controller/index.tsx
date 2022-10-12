import "./index.css";

interface Props {
  max: number;
  slide: number;
  handleClickPrevButton: VoidFunction;
  handleClickNextButton: VoidFunction;
}

const Controller = ({
  max,
  slide,
  handleClickPrevButton,
  handleClickNextButton,
}: Props) => {
  return (
    <div className="controller">
      <button
        className="controller__leftBtn"
        onClick={handleClickPrevButton}
        disabled={slide <= 0}
      >
        <span className="sr-only">이전</span>
      </button>
      <button
        className="controller__rightBtn"
        onClick={handleClickNextButton}
        disabled={slide >= max - 1}
      >
        <span className="sr-only">다음</span>
      </button>
    </div>
  );
};

export default Controller;
