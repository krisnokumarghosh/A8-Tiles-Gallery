import React from 'react';
import { NotoSerifFont } from '../layout';
import { Input } from '@heroui/react';
import { FaSearch } from 'react-icons/fa';
import { getTiles } from '@/lib/data';
import TileCard from '@/components/shared/TileCard';

const AllTilesPage = async() => {

    const tiles = await getTiles();

    // const handleSearchBtn = () => {
    //     const 
    // }

    return (
        <div className=' mt-12.5 mb-25'>
            <h1 className={`${NotoSerifFont.className} text-[32px] text-center mb-8 md:text-[40px]`}>The Gallery</h1>

            <div className='flex px-5 md:px-0 mb-7 md:mb-20 justify-center relative max-w-175 mx-auto'>
            <Input aria-label="text" className=" py-7  w-full px-10" placeholder="Search tiles by title" />
            <button className='absolute top-5 right-10 cursor-pointer'><FaSearch></FaSearch></button>
            </div>

            <div className='grid md:grid-cols-2  lg:grid-cols-3 items-center justify-items-center'>
                {
                    tiles.map((tile , ind) => {
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

export default AllTilesPage;