import React from "react";
import { NotoSerifFont } from "../layout";
import { getTiles } from "@/lib/data";
import TileCard from "@/components/shared/TileCard";
import { Input } from "@heroui/react";
import { FaSearch } from "react-icons/fa";

const AllTilesPage = async () => {
  const tiles = await getTiles();

  return (
    <div className=" mt-12.5 mb-25">
      <h1
        className={`${NotoSerifFont.className} text-[32px] text-center mb-8 md:text-[40px]`}
      >
        The Gallery
      </h1>

      <form className="max-w-175 px-5 md:px-0 mb-7  md:mb-20 mx-auto">
        <div className="flex px-5 md:px-0  justify-center relative  ">
          <Input
            name="search"
            aria-label="text"
            className=" py-4 md:py-7 border rounded border-[#e8e4e1] w-full px-10"
            placeholder="Search tiles by title"
          />
          <button className="absolute top-5 right-10 cursor-pointer">
            <FaSearch></FaSearch>
          </button>
        </div>
      </form>

      <div className="grid md:grid-cols-2  lg:grid-cols-3 items-center justify-items-center">
        {tiles.map((tile, ind) => {
          return <TileCard key={ind} tile={tile}></TileCard>;
        })}
      </div>
    </div>
  );
};

export default AllTilesPage;
