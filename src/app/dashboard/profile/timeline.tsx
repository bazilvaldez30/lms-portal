import Image from "next/image";
import React from "react";
import test from "/public/images/Zil.png";
import { IoCalendarOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

export default function Timeline() {
  return (
    <section>
      <div className="bg-timeline h-40 "></div>
      <div className="flex h-36 gap-6">
        <div className=" min-w-fit">
          <Image
            src={test}
            className="-mt-10 ms-6 h-32 w-32 rounded-full border-4 border-white "
            alt="user image"
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <div className="flex items-center gap-3">
            <h1 className="text-[22px] font-semibold">John Bazil Valdez</h1>
            <div className="space-x-3">
              <span className="rounded-lg border border-[#133782] bg-slate-200 px-3 py-2 text-[#133782]">
                Student
              </span>
              <span className="rounded-lg border border-[#31C348] bg-green-50 px-3 py-2 text-[#31C348]">
                Verified
              </span>
            </div>
          </div>
          <p className="text-sm text-custom-11">
            Eager student, avid learner, and creative thinker. Passionate about
            exploring the world and embracing new challenges. Let's learn and
            grow together!
          </p>
          <div className="flex gap-12">
            <span className="flex items-center gap-2">
              <IoCalendarOutline className="text-2xl text-custom-11" /> joined
              November 18, 2021
            </span>
            <span className="flex items-center gap-2 text-lg">
              <SlLocationPin className="text-2xl text-custom-11" />
              Marilao, Bulacan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
