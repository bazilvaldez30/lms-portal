import Image from "next/image";
import olasLogo from "/public/images/olas-logo.png";
import LoginForm from "./login-form";

export default function LoginPage() {
  
  return (
    <main>
      <div className="grid h-screen gap-5 p-5 sm:gap-0 lg:grid-cols-2">
        <div className="order-last flex flex-col items-center justify-between rounded-3xl bg-red-700 pt-10 shadow-2xl lg:order-first lg:items-start lg:ps-8">
          <p className=" text-5xl font-extrabold text-white">OLAS.</p>
          <div className="flex flex-col items-center lg:mb-16 lg:items-start">
            <p className=" font-small mb-2 px-5 text-center text-lg text-white lg:w-6/12 lg:px-0 lg:text-start">
              Welcome to our school SMS system! <br /> Log in to access a world
              of educational opportunities. Just like managing your schedule,
              select your preferences, and dive into a seamless experience of
              school management!
            </p>
            <hr className="w-5/12 lg:w-3/12" />
          </div>
          <p className=""></p>
        </div>
        <div className=" order-first flex flex-col items-center justify-center gap-10 lg:order-last">
          <Image src={olasLogo} alt="Olas Logo" width={100} height={100} />
          <p className="text-center text-3xl font-extrabold">
            Welcome to OLAS System
          </p>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
