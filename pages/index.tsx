import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Card from '../components/Card';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Divergent Careers Job Board</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Banner
        message='This app is still in development. If you have any questions, please
          reach out to me directly at: cameron@camthewebguy.com'
      />
      <Header />
      <Hero />
      <About />

      <div>
        <div className='listings grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-20 pt-10 bg-slate-50'>
          <Card />
          <Card />
          <Card />

          <Card />
          <Card />
          <Card />
        </div>
        <div className='text-center'>
          <Button text='View All Jobs' />
        </div>
      </div>
    </div>
  );
};

export default Home;
