import { NotoSerifFont } from "@/app/layout";
import React from "react";
import Navlink from "./Navlink";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className={`${NotoSerifFont.className} py-6 flex items-center justify-between px-4 md:px-12 bg-[#F9F8F7]`}>
      <div className="flex md:gap-3 items-center">
         <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content space-y-3 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li>
            <Navlink href={"/"} className="text-[#78716C] hover:bg-[#536257] hover:text-white" >
              Home
            </Navlink>
          </li>
          <li>
            <Navlink href={"/all-tiles"} className="text-[#78716C] hover:bg-[#536257] hover:text-white" >
              All Tiles
            </Navlink>
          </li>
          <li>
            <Navlink className="text-[#78716C] hover:bg-[#536257] hover:text-white" href={"/my-profile"}>
              My Profile
            </Navlink>
          </li>
      </ul>
    </div>
        <h1 className="text-[#333333] font-bold md:text-[20px]">Tiles Gallery</h1>
      </div>

      <div>
        <ul className="hidden lg:flex gap-6 items-center text-[#706F6F]">
          <li>
            <Navlink className="text-[#78716C]" href={"/"}>
              Home
            </Navlink>
          </li>
          <li>
            <Navlink className="text-[#78716C]" href={"/all-tiles"}>
              All Tiles
            </Navlink>
          </li>
          <li>
            <Navlink className="text-[#78716C]" href={"/my-profile"}>
              My Profile
            </Navlink>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-2 md:gap-5">
        <CgProfile className="text-2xl text-[#78716C]"/>
        <Link href={"/"}><button className="btn px-5 md:px-7 rounded-full border-0 bg-[#536257] text-white">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
