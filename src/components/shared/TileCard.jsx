import { NotoSerifFont } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TileCard = ({ tile }) => {
  return (
    <div className="card mt-8  bg-base-100 w-75 md:w-96 shadow border border-[#F4F3F2]">
      <figure>
       <Image
       alt="tile image"
       height={340}
       width={272}
       src={tile.image}
       className="w-68 h-85 mt-5"
       ></Image>
      </figure>
      <div className="card-body px-9">
        <p className="text-[12px] text-[#9E9B98]">{tile.material}</p>
        <h2 className={`${NotoSerifFont.className} card-title text-[#1E1E1E]`}>{tile.title}</h2>
        <div className="card-actions  mt-3">
            <Link href={`/all-tiles/${tile.id}`} className="w-full">
          <button className="btn  border-[#1E1E1E] bg-transparent text-[#1E1E1E] w-full">See Details</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default TileCard;
