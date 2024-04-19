import Image from "next/image";
import olasLogo from "/public/images/olas-logo.png";
import googleImage from "/public/images/google.png";

export default function LoginPage() {
  return (
    <main>
      <div className=" ">
        <div className="grid lg:grid-cols-2 h-screen p-5 flex gap-5 sm:gap-0">
          <div className="bg-red-700 rounded-3xl shadow-2xl pt-10 lg:ps-8 order-last lg:order-first flex flex-col justify-between items-center lg:items-start">
            <p className=" font-extrabold text-white text-5xl">OLAS.</p>
            <div className="lg:mb-16 flex flex-col items-center lg:items-start">
              <p className=" font-small text-white text-lg lg:w-6/12 mb-2 text-center lg:text-start px-5 lg:px-0">
                Welcome to our school SMS system! <br /> Log in to access a
                world of educational opportunities. Just like managing your
                schedule, select your preferences, and dive into a seamless
                experience of school management!
              </p>
              <hr className="lg:w-3/12 w-5/12" />
            </div>
            <p className=""></p>
          </div>
          <div className=" flex flex-col gap-10 justify-center items-center order-first lg:order-last">
            <Image src={olasLogo} alt="Olas Logo" width={100} height={100} />
            <p className="font-extrabold text-3xl text-center">
              Welcome to OLAS System
            </p>
            <form action="" className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="example@mail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="********"
                />
              </div>
              <button className="bg-red-500 py-2 rounded-md text-white shadow-sm">
                Login
              </button>
              <button>
                <div className="py-3 px-10 border border-solid rounded-md flex gap-2 justify-center">
                  <Image
                    src={googleImage}
                    alt="Google logo"
                    width={25}
                    height={25}
                  />
                  <p className="">Sign in with Google</p>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
