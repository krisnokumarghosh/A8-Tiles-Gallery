import { NotoSerifFont } from '@/app/layout';
import { getTiles } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const TileDetailsPage = async({params}) => {

    const {id} = await params;

    const tiles = await getTiles();

    const tile = tiles.find(item => item.id === id);

    return (
        <div className='mt-27.5 lg:flex gap-20 lg:pl-120'>
           <div>
            <Image
            alt='tile image'
            height={500}
            width={400}
            src={tile.image}
            className='w-100 h-140 mx-auto lg:mx-0'
            ></Image>
           </div>

           <div className='text-center lg:text-left'>
            <h1 className={`${NotoSerifFont.className} text-[35px] text-[#1E1E1E]`}>{tile.title}</h1>
            <p className='lg:text-left mt-3 font-semibold text-[#1E1E1E]'>{tile.category}</p>
            <div className="divider w-114 text-[#78716C] my-10 mx-auto lg:mx-0"></div>
            <p className='text-[13px] text-[#9E9B98] mb-4'>DESCRIPTION</p>
            <p></p>
           </div>
        </div>
    );
};

export default TileDetailsPage;