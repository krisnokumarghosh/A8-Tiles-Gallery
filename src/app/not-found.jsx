import { NotoSerifFont } from "@/lib/font";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="bg-[#FAF9F8] h-screen flex items-center justify-center">
      <div className="container w-75 md:w-175 space-y-6 py-10 md:py-20 bg-white rounded-md shadow">
        <p className="text-center font-semibold text-[#536257]">ERROR 404</p>
        <h1
          className={`${NotoSerifFont.className} text-[25px] md:text-[40px] text-center`}
        >
          Surface Not Found
        </h1>
        <p className=" w-50 md:w-125 text-[12px] md:text-[16px] mx-auto text-center">
          The page are you looking for has been removed or doesnt exist. Lets
          find your way back to gallery
        </p>
        <div className=" flex justify-center items-center flex-col  md:flex  gap-4">
          <Link href={"/"}>
            <button className="btn  w-40.5 border-0 bg-[#536257] text-white rounded-none">
              Back to Home
            </button>
          </Link>
          <Link href={"/all-tiles"}>
            <button className="btn border-0 bg-[#E6E2DF] text-[#1E1E1E] rounded-none">
              Browse Collections
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
