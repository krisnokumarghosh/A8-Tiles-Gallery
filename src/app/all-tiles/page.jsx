"use client";

import React, { useEffect, useState } from "react";
import TileCard from "@/components/shared/TileCard";
import { Input } from "@heroui/react";
import { FaSearch } from "react-icons/fa";
import { NotoSerifFont } from "@/lib/font";
import { getTiles } from "@/lib/data";

const AllTilesPage = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const getTilesData = async () => {
      const data = await getTiles();
      setTiles(data);
    };
    getTilesData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchData = e.target.search.value;

    const filteredData = tiles.filter(
      (item) => item.title.toLowerCase() === searchData.toLowerCase(),
    );

    setTiles(filteredData);
  };

  return (
    <div className=" mt-12.5 mb-25">
      <h1
        className={`${NotoSerifFont.className} text-[32px] text-center mb-8 md:text-[40px]`}
      >
        The Gallery
      </h1>

      <form
        onSubmit={handleSearch}
        className="max-w-175 px-5 md:px-0 mb-7  md:mb-20 mx-auto"
      >
        <div className="flex px-5 md:px-0  justify-center relative  ">
          <Input
            name="search"
            aria-label="text"
            className=" py-4 md:py-7 border rounded border-[#e8e4e1] w-full px-10"
            placeholder="Search tiles by title"
          />
          <button className="absolute top-5 md:top-8 right-10 cursor-pointer">
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
