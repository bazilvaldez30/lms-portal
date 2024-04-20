import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { programsData } from "@/app/shared/datas";
import ExpandableText from "../ExpandableText";

export default function Programs() {
  return (
    <section id="programs" className="py-12">
      <div className="container">
        <div className="space-y-8">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Explore Our Programs</h1>
            <button className="button-primary h-fit text-nowrap rounded-full bg-custom-3">
              Expore All <FaArrowRightLong className="icon" />
            </button>
          </div>
          <ExpandableText>
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
          </ExpandableText>
          <div className="flex flex-wrap justify-center gap-16 pt-12 text-center">
            {programsData.map((item) => (
              <div key={item.title}>
                <Image src={item.img} alt={item.title} />
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
