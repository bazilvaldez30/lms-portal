import { additionalInfoData } from '@/app/shared/datas'
import React from 'react'

export default function AdditionalInfo() {
  return (
    <section className='bg-custom-1 flex justify-center gap-24 py-4'>
      {additionalInfoData.map((item) => (
        <div
          key={item.title}
          className='flex items-center justify-center py-4 gap-3'
        >
          <div className='text-6xl text-white'>{item.icon}</div>
          <div className='space-y-2'>
            <p className='text-white font-semibold'>{item.value}</p>
            <h3 className='text-sm text-custom-2 font-semibold'>
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </section>
  )
}
