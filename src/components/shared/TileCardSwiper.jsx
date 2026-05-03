'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TileCard from './TileCard';

const TileCardSwiper = ({ tiles }) => {
  return (
    <>
      <div className="block md:hidden pb-8">
        <Swiper
          modules={[Pagination]}
          slidesPerView={2.1}
          spaceBetween={12}
          pagination={{ clickable: true }}
          className="pb-6"
        >
          {tiles.slice(0,4).map((tile, ind) => (
            <SwiperSlide key={ind}>
              <TileCard tile={tile} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {tiles.slice(0 , 4).map((tile, ind) => (
          <TileCard key={ind} tile={tile} />
        ))}
      </div>
    </>
  );
};

export default TileCardSwiper;