import Link from 'next/link';
import styles from '../styles/components/Layout.module.scss';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: Props) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Link href="/">{'<'}</Link>
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default Layout;
