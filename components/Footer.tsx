import { Lobster } from 'next/font/google';
import React from 'react'
import Instagram from './assets/social/Instagram';
import LinkedIn from './assets/social/LinkedIn';
import GitHub from './assets/social/Github';
import Facebook from './assets/social/Facebook';

const lobster = Lobster({ subsets: ["latin"], weight: "400" });
export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center bg-black p-4">
      <h1 className={'text-white text-2xl sm:text-3xl md:text-4xl p-4 ' + lobster.className}>
        World Wide Lens
      </h1>
      <ul className='pb-4 flex gap-3'>
        <a href="https://www.instagram.com/alexsaraev.15/" target="_blank">
          <Instagram className='w-4 sm:w-6 md:w-8 fill-white' />
        </a>
        <a href="https://www.linkedin.com/in/saraev-alexandru-5a3baa265/">
          <LinkedIn className='w-6 sm:w-8 md:w-11 fill-white' />
        </a>
        <a href="https://github.com/AlexSaraev020?tab=repositories">
          <GitHub className='w-4 sm:w-6 md:w-8 fill-white' />
        </a>
        <a href="https://www.facebook.com/alexandru.saraev.3/">
          <Facebook className='w-6 sm:w-8 md:w-11 fill-white' />
        </a>
      </ul>
      <p className="text-white text-center text-xs sm:text-base md:text-lg max-w-64 sm:max-w-96">
        Stay informed every moment of your life, ensuring you never miss a beat!
      </p>
    </footer>
  )
}
