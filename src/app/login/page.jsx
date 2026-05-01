import React from "react";
import { NotoSerifFont } from "../layout";
import googleImg from "@/assets/google.png"
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-[#FAF9F8] h-screen flex items-center ">
      <div className="bg-white shadow rounded-md w-127.75  mx-auto p-10 md:p-15.75">
        <h3 className={`${NotoSerifFont.className} text-[30px]`}>Login</h3>
        <p className="text-[#444748] mt-2 text-[13px] md:text-[16px]">Enter your credentials to access your curated collection.</p>
        <form className=" ">
            <legend className="mt-10">Email</legend>
            <input type="email" className="w-full border-b border-[#9E9B98]/60 mt-1 p-2 md:p-3.5" placeholder="example@gmail.com"></input>
            <legend className="mt-10">Password</legend>
            <input type="password" className="w-full border-b border-[#9E9B98]/60 mt-1 p-2 md:p-3.5" placeholder="..........."></input>
            <button className="btn border-0 rounded-none bg-[#536257] text-white mt-10 w-full py-5">Login</button>
        </form>
         <div className="divider mt-10 text-[13px] text-[#9E9B98]">OR Continue With</div>
         <button className="mt-10 flex items-center btn bg-transparent py-5 w-full text-[31A1C1C] border-[#9E9B98]">
          <Image
          alt="google logo"
          height={16}
          width={16}
          src={googleImg}
          ></Image>
          <p>Login With Google</p>
          </button>
      </div>
    </div>
  );
};

export default page;
