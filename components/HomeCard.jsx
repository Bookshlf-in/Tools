import styles from '@/styles/HomeCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const HomeCard = ({ link, name, imageSrc, heading, content }) => {
  return (
    <div className={styles.container}>
      <Link href={link}>
        <div className={styles.innerContainer}>
          <div className={styles.topContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={imageSrc}
                className={styles.mainImage}
                height={120}
                width={120}
                alt={name}
              />
              <h2 className={styles.cardHeading}>{heading}</h2>
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <p className={styles.cardContent}>{content}</p>
            <Image
              src={'/images/link.png'}
              className={styles.linkImage}
              width={20}
              height={20}
              alt="link"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeCard;
