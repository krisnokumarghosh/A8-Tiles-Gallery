import React from "react";
import bannerImg from "@/assets/banner.png";
import Image from "next/image";
import { NotoSerifFont } from "@/app/layout";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="mb-10  lg:flex  space-y-10  lg:space-y-0 justify-between gap-10 bg-[#F4F3F2] p-10 md:p-30 rounded-md">
      <div>
        <h1
          className={`${NotoSerifFont.className} text-[#1E1E1E] font-bold text-[24px] md:text-[40px] md:leading-15`}
        >
          Discover Your <br />
          Perfect <br />
          Aesthetic
        </h1>
        <p className="text-[3444748] text-[14px] md:text-[16px] mt-5 w-50 md:w-112.5 md:leading-7">
          Curated textures and architectural forms for the modern space. Elevate
          your environment with our hand-selected tile collections.
        </p>
        <button className="btn bg-[#536257] text-white px-10 mt-6 py-6">
            <Link href={"/"} >BROWS NOW</Link>
        </button>
      </div>
      <div className="flex justify-end">
        <Image
          alt="banner img"
          src={bannerImg}
          height={500}
          width={768}
          className="rounded-md"
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
