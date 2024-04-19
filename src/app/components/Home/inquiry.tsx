import React from 'react'
import programImage8 from '/public/images/program-image-8.png'
import { FaRegCheckCircle } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import Image from 'next/image'
import { inquiryData } from '@/app/shared/datas'

export default function Inquiry() {
  return (
    <section id='inquiry' className='py-12'>
      <div className='container'>
        <div className='flex items-center gap-12'>
          <div className='w-full space-y-8 md:ps-40'>
            <h1 className='text-2xl font-semibold  md:pe-28'>
              Explore our comprehensive selection of programs tailored to
              <span className='text-custom-2'> suit your academic goals.</span>
            </h1>
            <p>
              Embark on a journey of education with our extensive lineup of
              courses crafted to accommodate diverse skill levels and interests.
              Whether you're just starting out and in need of foundational
              knowledge or seeking to advance your skills, our programs cater to
              learners at every stage of development.
            </p>
            <div className='grid grid-cols-2 gap-6 md:pe-7'>
              {inquiryData.map((item) => (
                <div key={item} className='flex items-center gap-4'>
                  <FaRegCheckCircle className='icon w-8 h-8' />
                  <p className='pe-8 w-full'>{item}</p>
                </div>
              ))}
            </div>
            <button className='button-primary rounded-full bg-custom-3'>
              Inquire <FaArrowRightLong className='icon' />
            </button>
          </div>
          <div className='w-full'>
            <Image
              src={programImage8}
              alt='teacher-holding-laptop'
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
