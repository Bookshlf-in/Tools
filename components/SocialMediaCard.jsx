import styles from '@/styles/SocialMediaCard.module.css';
import SocialMedia from './SocialMedia';

const data = [
  {
    id: 1,
    name: 'email',
    imgSrc: '/images/email.png',
    link: 'mailto:bookshlf.in@gmail.com',
  },
  {
    id: 2,
    name: 'youtube',
    imgSrc: '/images/youtube.png',
    link: 'https://www.youtube.com/channel/UCvZJWq7cQ4-cGJFsCWIppGQ',
  },
  {
    id: 3,
    name: 'linkedin',
    imgSrc: '/images/linkedin.png',
    link: 'https://www.linkedin.com/company/bookshlf-in/',
  },
  {
    id: 4,
    name: 'instagram',
    imgSrc: '/images/instagram.png',
    link: 'https://www.instagram.com/_bookshlf/',
  },
  {
    id: 5,
    name: 'twitter',
    imgSrc: '/images/twitter.png',
    link: 'https://twitter.com/BookshlfA',
  },
];

const SocialMediaCard = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.cardHeading}>Reach out to us</h2>
      <div className={styles.socialMediaContainer}>
        {data.map((e) => (
          <SocialMedia
            key={e.id}
            name={e.name}
            imgSrc={e.imgSrc}
            link={e.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialMediaCard;
