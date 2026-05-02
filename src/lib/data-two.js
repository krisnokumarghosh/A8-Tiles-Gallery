"use client"

import { useEffect, useState } from "react";
import { getTiles } from "./data";

export const GalleryPageTiles = () => {
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTilesData = async () => {
      const data = await getTiles();
      setTimeout(() => {
        setTiles(data);
        setLoading(false);
      }, 500);
    };
    getTilesData();
  }, []);

  return {tiles, loading};

};
