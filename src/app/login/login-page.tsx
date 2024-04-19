import Image from 'next/image'
import olasLogo from '/public/images/olas-logo.png'
import LoginForm from './login-form'

export default function LoginPage() {
  return (
    <main>
      <div className='grid lg:grid-cols-2 h-screen p-5 flex gap-5 sm:gap-0'>
        <div className='bg-red-700 rounded-3xl shadow-2xl pt-10 lg:ps-8 order-last lg:order-first flex flex-col justify-between items-center lg:items-start'>
          <p className=' font-extrabold text-white text-5xl'>OLAS.</p>
          <div className='lg:mb-16 flex flex-col items-center lg:items-start'>
            <p className=' font-small text-white text-lg lg:w-6/12 mb-2 text-center lg:text-start px-5 lg:px-0'>
              Welcome to our school SMS system! <br /> Log in to access a world
              of educational opportunities. Just like managing your schedule,
              select your preferences, and dive into a seamless experience of
              school management!
            </p>
            <hr className='lg:w-3/12 w-5/12' />
          </div>
          <p className=''></p>
        </div>
        <div className=' flex flex-col gap-10 justify-center items-center order-first lg:order-last'>
          <Image src={olasLogo} alt='Olas Logo' width={100} height={100} />
          <p className='font-extrabold text-3xl text-center'>
            Welcome to OLAS System
          </p>
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
