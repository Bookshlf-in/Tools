import styles from '@/styles/HomeCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const HomeCard = ({ link, name, imageSrc, heading, content }) => {
  return (
    <div className={styles.container}>
      <Link href={link}>
        <div className={styles.innerContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={imageSrc}
                className={styles.mainImage}
                width={90}
                height={90}
                alt={name}
              />
            </div>
          </div>
          <div className={styles.rightContainer}>
            <h2 className={styles.cardHeading}>{heading}</h2>
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
