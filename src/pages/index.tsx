import HelloWorld from 'components/HelloWorld';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <title>Next.js Init</title>
      </Head>

      <main className={styles.main}>
        <HelloWorld />
      </main>
    </div>
  );
};

export default Home;
