import Image from "next/image";
import React from "react";
import test from "/public/images/Zil.png";
import { IoCalendarOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

export default function Timeline() {
  return (
    <section>
      <div className="h-40 bg-timeline"></div>
      <div className="flex h-[400px] w-full flex-col gap-6 text-center md:h-36 md:flex-row md:text-start">
        <div className="mx-auto min-w-fit">
          <Image
            src={test}
            className="-mt-16 ms-6 h-32 w-32 rounded-full border-4 border-white md:-mt-10 "
            alt="user image"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 md:gap-2">
          <div className="mx-auto flex flex-col gap-3 md:mx-0 md:flex-row md:items-center">
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
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center justify-center gap-3 text-[14px] md:flex-row md:items-start md:justify-start md:gap-12">
              <span className="flex items-center gap-2">
                <IoCalendarOutline className="text-xl text-custom-11" /> Joined
                November 18, 2021
              </span>
              <span className="flex items-center gap-2">
                <SlLocationPin className="text-xl text-custom-11" />
                Marilao, Bulacan
              </span>
            </div>
            <button className="button-primary rounded-md bg-custom-1 py-1 text-xs md:me-5">
              Verify
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
