import styles from './ToastNotification.module.css';

interface ToastNotificationProps {
  message: string;
}

const ToastNotification = ({ message }: ToastNotificationProps) => {
  return (
    <div className={styles.toastNotification} role="alert">
      <span>{message}</span>
    </div>
  );
};

export default ToastNotification;
