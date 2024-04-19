import React from 'react'
import Image from 'next/image'
import communityImage1 from '/public//images/community-image-1.png'
import communityImage2 from '/public//images/community-image-2.png'
import communityImage3 from '/public//images/community-image-3.png'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function Community() {
  return (
    <section id='community' className='py-12 bg-custom-1 text-white'>
      <div className='container flex items-center gap-12'>
        <div className='flex gap-6 w-8/12'>
          <Image src={communityImage1} alt='community-image-1' />
          <div className='space-y-6'>
            <Image src={communityImage2} alt='community-image-2' />
            <Image src={communityImage3} alt='community-image-3' />
          </div>
        </div>
        <div className='w-5/12 space-y-6'>
          <h1 className='text-2xl font-semibold'>Community</h1>
          <p>
            Dive into our vibrant community hub, where stories come to life
            through engaging blogs and captivating photo galleries. Join us on a
            journey of discovery and connection as we celebrate the diverse
            experiences and achievements within our school family.
          </p>
          <button className='button-primary bg-custom-2 rounded-full'>
            View <FaArrowRightLong className='icon' />
          </button>
        </div>
      </div>
    </section>
  )
}
