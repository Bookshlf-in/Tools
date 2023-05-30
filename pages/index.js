import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import HomeCard from '@/components/HomeCard';
import SocialMedia from '@/components/SocialMediaCard';
import Footer from '@/components/Footer';

const cardData = [
  {
    key: 1,
    link: '/college-predictor',
    imageSrc: '/images/college.png',
    heading: 'JEE College Predictor',
    content:
      'Predict your college based on your JEE Mains rank based on previous years JOSAA data',
  },
  {
    key: 2,
    link: '/rank-predictor',
    imageSrc: '/images/leaderboard.png',
    heading: 'JEE Mains Rank Predictor',
    content:
      'Predict your JEE Mains and Advanced Rank based on your percentile in JEE Mains',
  },
  {
    key: 3,
    link: 'https://bookshlf.in',
    imageSrc: '/images/books.png',
    heading: 'Bookshlf',
    content: 'Buy and Sell used books on bookslf from comfort of your home.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Bookshlf Tools</title>
        <meta
          name="description"
          content="Tools for students preparing for JEE."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          {cardData.map((e) => (
            <HomeCard
              key={e.key}
              link={e.link}
              imageSrc={e.imageSrc}
              heading={e.heading}
              content={e.content}
            />
          ))}
        </div>
        <Footer>
          <SocialMedia />
        </Footer>
      </main>
    </>
  );
}
