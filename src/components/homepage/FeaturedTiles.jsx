import { getTiles } from '@/lib/data';
import React from 'react';
import TileCard from '../shared/TileCard';

const FeaturedTiles = async() => {

    const tiles = await getTiles();

    return (
        <div className='w-[95%] mx-auto'>
            <h1 className={`text-[32px] mb-15 font-semibold text-[#1E1E1E]`}>Featured Collections</h1>
            <div className='grid grid-cols-4 justify-items-center'>
                {
                    tiles.slice(0, 4).map((tile, ind) => {
                        return(
                            <TileCard
                            key={ind}
                            tile={tile}
                            >

                            </TileCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FeaturedTiles;