import { getTiles } from "@/lib/data";
import React from "react";
import TileCardSwiper from "../shared/TileCardSwiper";

const FeaturedTiles = async () => {
  const tiles = await getTiles();

  return (
    <div className="w-[95%] mx-auto mb-15 md:mb-25">
      <h1
        className={`text-[26px] text-center md:text-[32px] md:mb-15 font-semibold text-[#1E1E1E]`}
      >
        Featured Collections
      </h1>
      <div className="mb-6">
        <TileCardSwiper tiles={tiles} />
      </div>
    </div>
  );
};

export default FeaturedTiles;
