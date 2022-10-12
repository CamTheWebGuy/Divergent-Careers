import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Card from '../components/Card';
import FeaturedListings from '../components/FeaturedListings';
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
      <FeaturedListings />

      <footer className='px-20 py-5 bg-black text-white mt-10'>
        <div className='footer-col text-center'>
          <h2>Copyright &copy; 2022 | All Rights Reserved</h2>
        </div>
      </footer>
    </div>
  );
};

export default Home;
