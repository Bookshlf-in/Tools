import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import '@/styles/globals.css';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (!sessionStorage.getItem('ip')) {
      fetch('https://api.ipify.org/?format=json')
        .then((res) => res.json())
        .then((data) => {
          sessionStorage.setItem('ip', data?.ip);
        })
        .catch((error) => {
          console.log('Error fetching info', error);
        });
    }
    if (!sessionStorage.getItem('sessionId')) {
      sessionStorage.setItem('sessionId', nanoid());
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
