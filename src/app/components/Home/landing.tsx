import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaPlay } from 'react-icons/fa'
import Image from 'next/image'
import landingImage from '/public/images/landing-page-image.png'

export default function Landing() {
  return (
    <main className='flex min-h-screen flex-col items-center pt-28 bg-custom-1 text-white gap-6'>
      <h1 className='text-2xl font-semibold'>
        Commence a journeyof explorations with
        <br />
        <span className='text-custom-2'>OLAS</span>, where learning knows no
        bounds!
      </h1>
      <div className='flex gap-12'>
        <button className='button-primary bg-custom-3 rounded-full'>
          Get Started <FaArrowRightLong className='icon' />
        </button>
        <button className='button-outlined border-custom-3 rounded-full text-custom-3'>
          <FaPlay className='icon' />
          Watch Video
        </button>
      </div>
      <Image src={landingImage} alt='landing-image' />
    </main>
  )
}
