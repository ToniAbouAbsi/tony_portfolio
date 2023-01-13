import Head from 'next/head';
// import Cards from './Components/Cards';

import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiJava,
} from 'react-icons/di';
import { AiOutlineMobile, AiOutlineMail } from 'react-icons/ai';
import { SiMysql } from 'react-icons/si';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import deved from '../public/dev-ed-wave.png';
import Image from 'next/image';
import Project1 from '../public/Project1.png';
import Project2 from '../public/Project2.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Tony Abou Absi Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='font-burtons text-xl'>Portfolio</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=' cursor-pointer text-2xl'
                />
              </li>
              <li>
                <a
                  className='bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'
                  target='blank'
                  href='https://www.linkedin.com/feed/'
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
              Tony Abou Absi
            </h2>
            <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
              Developer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl'>
              <b> Welcome to my website portfolio!</b>
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
              <DiHtml5 />
              <DiCss3 />
              <DiJavascript1 />
              <DiReact />
              <DiJava />
              <SiMysql />
            </div>
            <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96'>
              <Image alt='Image' src={deved} layout='fill' objectFit='cover' />
            </div>
          </div>
        </section>
        <section className='text-center py-10'>
          <h2 className='text-4xl pb-5 text-teal-500 '>Contact Me</h2>
          <p className='text-md py-2 pb-5 text-gray-800 dark:text-gray-200 '>
            If you have any inquiries or would like to work with me, please
            don&apos;t hesitate to reach out. You can contact me via phone or
            email, as provided below.
          </p>
          <div className='flex items-center justify-center '>
            <a href='tel:+96176887508' className='mr-8'>
              <AiOutlineMobile className='text-5xl text-teal-500' />
            </a>
            <a href='mailto:toniabouabsi000@gmail.com' className=''>
              <AiOutlineMail className='text-5xl text-teal-500' />
            </a>
          </div>
          <p className='text-xl py-2 pt-10 text-gray-800 dark:text-gray-200 '>
            +961 76 887 508
          </p>
          <p className='text-xl py-2 text-gray-800 dark:text-gray-200 '>
            toniabouabsi000@gmail.com
          </p>
        </section>
        <section>
          <h3 className='text-3xl py-1   text-teal-500 '>About Me</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            I am a recent graduate in Computer Science with a passion for web
            development and an interest in new technologies. <br /> I am
            constantly striving to improve my skills and stay up to date with
            the latest developments in the field. I also have a keen interest in
            machine learning and artificial intelligence programming and coding.
            I am eager to take on new challenges and opportunities to grow in my
            field and make a positive impact in the industry. Thank you for
            visiting my website, and I hope you find it informative and
            interesting.
          </p>
        </section>
        {/* <Cards /> */}
        <section className='py-10'>
          <div>
            <h3 className='text-3xl py-1 text-teal-500 '>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              <b>
                Welcome to my portfolio section, where I showcase some of my
                past work and accomplishments.{' '}
              </b>{' '}
              <br />
              In this section, you will find a variety of projects that I have
              worked on, including web design and development, branding, and
              machine learning projects. I have carefully selected a variety of
              projects that showcase my skills and abilities, and I am confident
              that you will find something that interests you.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div
              className='basis-1/3 flex-1 m-auto
                '
            >
              <a href='https://safeheart.netlify.app/' target='blank'>
                <Image
                  alt='Image1'
                  className='rounded-lg object-cover'
                  src={Project1}
                />
              </a>
            </div>
            <div
              className='basis-1/3 flex-1 m-auto
                '
            >
              <a href='https://taacocktails.netlify.app' target='blank'>
                <Image
                  alt='Image2'
                  className='rounded-lg object-cover'
                  src={Project2}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
