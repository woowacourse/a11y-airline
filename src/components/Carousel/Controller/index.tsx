import "./style.css";

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
  const isFirstSlide = slide <= 0;
  const isLastSlide = slide >= max - 1;

  return (
    <div className="controller">
      <button
        className="controller__leftBtn"
        onClick={handleClickPrevButton}
        disabled={isFirstSlide}
        aria-disabled={isFirstSlide}
        aria-label="이전"
      />
      <button
        className="controller__rightBtn"
        onClick={handleClickNextButton}
        disabled={isLastSlide}
        aria-disabled={isLastSlide}
        aria-label="이전"
      />
    </div>
  );
};

export default Controller;
