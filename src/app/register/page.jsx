import React from "react";
import googleImg from "@/assets/google.png"
import Image from "next/image";
import { NotoSerifFont } from "@/lib/font";

const page = () => {
  return (
    <div className="bg-[#FAF9F8] ">
      <div className="bg-white  shadow rounded-md md:w-127.75  mx-auto p-10 md:p-15.75">
        <p className="text-14px text-[#536257] text-center mb-4 font-semibold">JOIN OUR STUDIO</p>
        <h3 className={`${NotoSerifFont.className} text-center text-[30px]`}>Register</h3>
        <p className="text-[#444748] text-center mt-2 text-[13px] md:text-[16px]">Create an account to curate your collections.</p>
        <form className=" ">
            <legend className="mt-10">Name</legend>
            <input type="text" className="w-full border-b border-[#9E9B98]/60 mt-1 p-2 md:p-3.5" placeholder="Enter Your Name"></input>
            <legend className="mt-10">Email</legend>
            <input type="email" className="w-full border-b border-[#9E9B98]/60 mt-1 p-2 md:p-3.5" placeholder="example@gmail.com"></input>
            <legend className="mt-10">Photo URL</legend>
            <input type="text" className="w-full border-b border-[#9E9B98]/60 mt-1 p-2 md:p-3.5" placeholder="Enter Photo URL"></input>
            <legend className="mt-10">Password</legend>
            <input type="password" className="w-full border-b border-[#9E9B98]/60 mt-1 p-2 md:p-3.5" placeholder="..........."></input>
            <button className="btn border-0 rounded-none bg-[#536257] text-white mt-10 w-full py-5">Register</button>
        </form>
         <div className="divider mt-10 text-[13px] text-[#9E9B98]">OR Continue With</div>
         <button className="mt-10 flex items-center btn bg-transparent py-5 w-full text-[31A1C1C] border-[#9E9B98]">
          <Image
          alt="google logo"
          height={16}
          width={16}
          src={googleImg}
          ></Image>
          <p>Continue With Google</p>
          </button>
      </div>
    </div>
  );
};

export default page;
