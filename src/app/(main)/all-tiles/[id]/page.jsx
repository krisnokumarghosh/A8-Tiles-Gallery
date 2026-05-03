import { getTiles } from "@/lib/data";
import { NotoSerifFont } from "@/lib/font";
import Image from "next/image";
import React from "react";

const TileDetailsPage = async ({ params }) => {
  const { id } = await params;

  const tiles = await getTiles();

  const tile = tiles.find((item) => item.id === id);

  return (
    <div className="my-27.5 lg:flex gap-20 lg:pl-120">
      <div>
        <Image
          alt="tile image"
          height={500}
          width={400}
          src={tile.image}
          className="w-65 h-85 md:w-100 md:h-140 mx-auto lg:mx-0"
        ></Image>
      </div>

      <div className="text-center lg:text-left">
        <h1
          className={`${NotoSerifFont.className} mt-4 lg:mt-0 text-[28px] md:text-[35px] text-[#1E1E1E]`}
        >
          {tile.title}
        </h1>
        <p className="lg:text-left mt-3 font-semibold text-[#1E1E1E]">
          {tile.category}
        </p>
        <h3 className="mt-3 text-[20px] font-bold text-[#1E1E1E]">
          ${tile.price}
        </h3>
        <div className="divider md:w-114 text-[#78716C] my-10 mx-auto lg:mx-0"></div>
        <p className="text-[13px] text-[#9E9B98] mb-4 font-semibold">
          DESCRIPTION
        </p>
        <p className="w-65  md:w-114 mx-auto lg:mx-0  leading-7 text-[#444748]">
          {tile.description}
        </p>
        <p className="text-[13px] mt-10 text-[#9E9B98] mb-4 font-semibold">
          SPECIFICATIONS
        </p>
        <div className="space-y-3">
          <div className="flex justify-center gap-20 lg:justify-between items-center">
            <p className="text-[#9E9B98]">Dimensions</p>
            <p className="font-semibold">{tile.dimensions}</p>
          </div>
          <div className="flex justify-center gap-20 lg:justify-between items-center">
            <p className="text-[#9E9B98]">Material</p>
            <p className="font-semibold">{tile.material}</p>
          </div>
        </div>
        <p className="text-[13px] mt-10 text-[#9E9B98] mb-4 font-semibold">
          TAGS
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          {
            tile.tags.map((tag, ind) => {
             return(
               <div key={ind}>
                <span className={`badge rounded-full p-4 ${ind === 0 ? "bg-[#D6E7D9] text-[#59685D]" : "bg-[#E6E2DF] text-black"}`}>{tag}</span>
               </div>
             )
            })
          }
        </div>
        <button className="btn border-0 mt-5 rounded-full bg-[#536257] lg:w-full text-white">
          Request A Sample
        </button>
      </div>
    </div>
  );
};

export default TileDetailsPage;
