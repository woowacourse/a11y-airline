import styles from './ToolTip.module.css';

const ToolTip = ({ text }: { text: string }) => {
  return (
    <div className={styles.toolTip}>
      <button aria-describedby='TIP-TEL' className={styles.toolTipButton}>
        성인 탑승자 툴팁
      </button>
      <p id='TIP-TEL' role='tooltip' className={styles.toolTipText}>
        {text}
      </p>
    </div>
  );
};

export default ToolTip;
