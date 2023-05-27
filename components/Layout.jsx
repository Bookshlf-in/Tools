import Header from './Header';
import styles from '@/styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.children}>{children}</div>
    </>
  );
};

export default Layout;
