import Image from "next/image";
import React from "react";
import consaltationImage from "@/assets/decore.jpg";
import { NotoSerifFont } from "@/lib/font";

const Consultation = () => {
  return (
    <div className=" md:mt-32  bg-[#F4F3F2]/30 p-10 md:p-25 lg:flex justify-center gap-20 text-center lg:text-left">
      <Image
        alt="decorated iamge"
        height={300}
        width={300}
        src={consaltationImage}
        className="rounded-md mx-auto lg:mx-0"
      ></Image>
      <div className="space-y-6">
        <p className="text-[#536257] mt-7 lg:mt-0">PERSONALIZED SERVICE</p>
        <h2 className={`${NotoSerifFont.className} w-65 md:w-125 mx-auto lg:mx-0 text-[26px] md:text-[40px] text-[#1A1C1C]`}>
          Design Consultations for the Visionary.
        </h2>
        <p className="text-[#444748] text-[13px] md:text-[16px] w-65 md:w-80 md:leading-7  mx-auto lg:mx-0">
          Our specialists work with you to find the perfect tactile elements
          that complement your architectural vision. From residential to
          large-scale commercial projects.
        </p>
        <button className="btn bg-transparent border-[#444748] text-[#444748]">BOOK A SESSION</button>
      </div>
    </div>
  );
};

export default Consultation;
