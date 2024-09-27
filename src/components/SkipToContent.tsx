import styles from './SkipToContent.module.css';
interface SkipToContentProps {
  hrefString: string;
  handleOnClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLAnchorElement>) => void;
}

const SkipToContent = ({ hrefString, handleOnClick, handleOnKeyDown }: SkipToContentProps) => {
  return (
    <a
      href={hrefString}
      className={styles.skipLink}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
    >
      본문으로 넘어가기
    </a>
  );
};

export default SkipToContent;
