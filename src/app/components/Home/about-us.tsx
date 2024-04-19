'use client'

import { aboutUsData } from '@/app/shared/datas'
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function AboutUs() {
  return (
    <section id='about-us' className='scroll-mt-2 my-12'>
      <h1 className='text-2xl font-semibold text-center mb-6'>Our Identity</h1>
      <VerticalTimeline lineColor='#A7252F'>
        {aboutUsData.map((item) => (
          <React.Fragment key={item.title}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                background: true ? '#D9C02F' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: true
                  ? '0.4rem solid #D9C02F'
                  : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.title}
              icon={item.icon}
              iconStyle={{
                background: true ? '#A7252F' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
                color: '#fff',
              }}
            >
              <p className='!mt-1 !font-normal text-white'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
