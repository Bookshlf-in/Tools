import { useState } from 'react';
import styles from '@/styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Header = () => {
  const [showBottomNav, setShowBottomNav] = useState(false);
  const toggleShowBottomNav = () => {
    setShowBottomNav((prev) => !prev);
  };
  return (
    <div className={styles.nav}>
      <div className={styles.navTop}>
        <div className={styles.navLeft}>
          <Image
            src={'/images/logo.svg'}
            style={styles.logo}
            width={50}
            height={50}
            alt="Bookshlf Logo"
          ></Image>
          <div className={styles.websiteName}>BOOKSHLF TOOLS</div>
        </div>
        <div className={styles.navRight}>
          <Link href={'/'}>
            <Button>Home</Button>
          </Link>
          <Link href={'/college-predictor'}>
            <Button>College Predictor</Button>
          </Link>
          <Link href={'/rank-predictor'}>
            <Button>Rank Predictor</Button>
          </Link>
          <Link href={'https://bookshlf.in'} target="_blank">
            <Button>Buy & Sell Used Books</Button>
          </Link>
        </div>
        <div className={styles.hamburgerContainer}>
          <Button onClick={toggleShowBottomNav}>
            <div className={styles.hamburgerButton}>
              <div className={styles.hamburgerLine} />
              <div className={styles.hamburgerLine} />
              <div className={styles.hamburgerLine} />
            </div>
          </Button>
        </div>
      </div>
      {showBottomNav && (
        <div className={styles.navBottom}>
          <Link href={'/'}>
            <Button>Home</Button>
          </Link>
          <Link href={'/college-predictor'}>
            <Button>College Predictor</Button>
          </Link>
          <Link href={'/rank-predictor'}>
            <Button>Rank Predictor</Button>
          </Link>
          <Link href={'https://bookshlf.in'} target="_blank">
            <Button>Buy & Sell Used Books</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
