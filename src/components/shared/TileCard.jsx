import { NotoSerifFont } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TileCard = ({ tile }) => {
  return (
    <div className="card mt-8  bg-base-100 w-36 md:w-96 shadow border border-[#F4F3F2]">
      <figure>
       <Image
       alt="tile image"
       height={340}
       width={272}
       src={tile.image}
       className="h-22 rounded-md md:rounded-none w-25 md:w-68 md:h-85 mt-3 md:mt-5"
       ></Image>
      </figure>
      <div className="card-body gap-1 md:gap-2 md:px-9">
        <p className="text-[9px] md:text-[12px] text-[#9E9B98]">{tile.material}</p>
        <h2 className={`${NotoSerifFont.className} text-[12px] md:text-[18px] card-title text-[#1E1E1E]`}>{tile.title}</h2>
        <div className="card-actions mt-1 md:mt-3">
            <Link href={`/all-tiles/${tile.id}`} className="w-full">
          <button className="btn p-0 h-5 md:h-10 text-[8px] md:text-[14px] border-[#1E1E1E] bg-transparent text-[#1E1E1E] w-full">See Details</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default TileCard;
