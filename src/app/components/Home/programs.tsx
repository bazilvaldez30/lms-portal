import React from 'react'
import Image from 'next/image'
import programImage8 from '/public/images/program-image-8.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { programsData, programsData2 } from '@/app/shared/datas'
import { FaRegCheckCircle } from 'react-icons/fa'

export default function Programs() {
  return (
    <section id='programs' className='py-12'>
      <div className='container'>
        <div className='space-y-8'>
          <div className='flex justify-between'>
            <h1 className='text-2xl font-semibold'>Explore Our Programs</h1>
            <button className=' button-primary rounded-full bg-custom-3'>
              Expore All <FaArrowRightLong className='icon' />
            </button>
          </div>
          <p className=' text-muted'>
            Welcome to our diverse array of educational programs tailored to
            nurture young minds through every stage of their academic journey.
            Our programs span from early-stage education, providing a solid
            foundation for young learners, to elementary and high school
            programs that foster intellectual growth and character development.
            With a commitment to excellence, we accompany students through their
            formative years, guiding them from junior to senior high school with
            a holistic approach that encompasses academic rigor, critical
            thinking, and personal enrichment. Explore our programs to discover
            how we cultivate a passion for learning and empower students to
            thrive in both their academic pursuits and personal endeavors.
          </p>
          <div className='flex flex-wrap gap-16 justify-center pt-12 text-center'>
            {programsData.map((item) => (
              <div key={item.title}>
                <Image src={item.img} alt={item.title} />

                <h2 className='text-xl font-semibold'>{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
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
              {programsData2.map((item) => (
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
