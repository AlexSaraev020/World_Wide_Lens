import { Lobster } from 'next/font/google';
import React from 'react'
import Instagram from '../public/assets/instagram.svg';
import LinkedIn from '../public/assets/linkedin.svg';
import GitHub from '../public/assets/github.svg';
import Facebook from '../public/assets/facebook.svg';
import Image from 'next/image';

const lobster = Lobster({ subsets: ["latin"], weight: "400" });
export default function Footer() {
  return (
    <footer className="w-full h-fit flex flex-col items-center justify-center bg-black p-4">
      <h1 className={'text-white text-2xl sm:text-3xl md:text-4xl p-4 ' + lobster.className}>
        World Wide Lens
      </h1>
      <ul className='pb-4 flex gap-3'>
        <a className='flex items-center justify-center' href="https://www.instagram.com/alexsaraev.15/" target="_blank">
          <Image src={Instagram} alt="Instagram" className='w-4 sm:w-6 md:w-8' />
        </a>
        <a className='flex items-center justify-center' href="https://www.linkedin.com/in/saraev-alexandru-5a3baa265/" target="_blank">
          <Image src={LinkedIn} alt="Instagram" className='w-6 sm:w-8 md:w-11' />
        </a>
        <a className='flex items-center justify-center' href="https://github.com/AlexSaraev020?tab=repositories" target="_blank">
          <Image src={GitHub} alt="Instagram" className='w-4 sm:w-6 md:w-8' />
        </a>
        <a className='flex items-center justify-center' href="https://www.facebook.com/alexandru.saraev.3/" target="_blank">
          <Image src={Facebook} alt="Instagram" className='w-6 sm:w-8 md:w-11 fill-white' />
        </a>
      </ul>
      <p className="text-white text-center text-xs sm:text-base md:text-lg max-w-64 sm:max-w-96">
        Stay informed every moment of your life, ensuring you never miss a beat!
      </p>
    </footer>
  )
}
