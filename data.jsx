"use client";

import React, { useEffect, useState } from "react";
import TileCard from "@/components/shared/TileCard";
import { FaSearch } from "react-icons/fa";

const AllTilesPage = () => {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTiles = async () => {
      const res = await fetch("https://ai-tiles-gallery.vercel.app/tiles.json");
      const data = await res.json();
      setTiles(data);
    };
    fetchTiles();
  }, []);

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <h1 className="text-2xl mb-4 text-center">The Gallery</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex px-5 md:px-0 justify-center relative mb-6"
      >
        <input
          type="text"
          placeholder="Search tiles by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:max-w-md px-4 py-2 border rounded-md bg-transparent"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <FaSearch />
        </button>
      </form>

      <div className="grid grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-4">
        {filteredTiles.map((tile, idx) => (
          <TileCard key={idx} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default AllTilesPage;