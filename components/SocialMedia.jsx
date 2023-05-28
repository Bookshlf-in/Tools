import styles from '@/styles/SocialMedia.module.css';
import Image from 'next/image';
import Link from 'next/link';

const SocialMedia = ({ name, imgSrc, link }) => {
  return (
    <Link href={link} target="_blank">
      <div className={styles.container}>
        <Image
          src={imgSrc}
          width={60}
          height={60}
          alt={name}
          className={styles.image}
        />
      </div>
    </Link>
  );
};

export default SocialMedia;
