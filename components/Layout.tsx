import Link from 'next/link';
import styles from '../styles/components/Layout.module.scss';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">{'<'}</Link>
        <h1>{title}</h1>
      </header>
      <div className={styles.contents}>{children}</div>
    </>
  );
};

export default Layout;
