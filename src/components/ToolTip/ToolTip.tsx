import styles from './ToolTip.module.css';

const ToolTip = ({ text }: { text: string }) => {
  return (
    <div className={styles.toolTip}>
      <button aria-label={text} className={styles.toolTipButton}>
        성인 탑승자 툴팁
      </button>
      <p className={styles.toolTipText}>{text}</p>
    </div>
  );
};

export default ToolTip;
