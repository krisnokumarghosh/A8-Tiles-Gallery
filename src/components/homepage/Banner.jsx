import React from "react";
import bannerImg from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { NotoSerifFont } from "@/lib/font";

const Banner = () => {
  return (
    <div className="mb-30">
    <div className=" lg:flex  space-y-10  lg:space-y-0 justify-between gap-10 bg-[#F4F3F2] p-10 md:p-30 rounded-md">
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
         <Link href={"/all-tiles"}>
        <button className="btn bg-[#536257] text-white px-10 mt-6 py-6">
           BROWS NOW
        </button>
         </Link>
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
     <div className="bg-[#E6E2DF] p-6"> 
            <Marquee>
                <p className="text-[#1C1B1A]">NEW ARRIVALS: TERRA COTTA HAND-GLAZED | WEEKLY FEATURE: MODERN GEOMETRIC PATTERNS | JOIN THE COMMUNITY FOR EXCLUSIVE ACCESS | SUSTAINABLY SOURCED MATERIALS | NEW ARRIVALS: TERRA COTTA HAND-GLAZED | WEEKLY FEATURE: MODERN GEOMETRIC PATTERNS | JOIN THE COMMUNITY FOR EXCLUSIVE ACCESS | SUSTAINABLY SOURCED MATERIALS</p>
            </Marquee>
        </div>
    </div>
  );
};

export default Banner;
