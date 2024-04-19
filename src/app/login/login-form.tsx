import React from 'react'
import Image from 'next/image'
import googleImage from '/public/images/google.png'

export default function LoginForm() {
  return (
    <form action='' className='flex flex-col gap-5'>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Email
        </label>
        <input
          type='text'
          name='email'
          id='price'
          className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='example@mail.com'
        />
      </div>
      <div>
        <label
          htmlFor='password'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Password
        </label>
        <input
          type='password'
          name='password'
          id='price'
          className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='********'
        />
      </div>
      <button className='bg-red-500 py-2 rounded-md text-white shadow-sm'>
        Login
      </button>
      <button>
        <div className='py-3 px-10 border border-solid rounded-md flex gap-2 justify-center'>
          <Image src={googleImage} alt='Google logo' width={25} height={25} />
          <p className=''>Sign in with Google</p>
        </div>
      </button>
    </form>
  )
}
