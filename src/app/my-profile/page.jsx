"use client";

import { authClient } from "@/lib/auth-client";
import { NotoSerifFont } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="bg-[#FAF9F8] h-screen">
      {isPending ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div className="flex flex-col justify-center  items-center p-20">
          <div>
            <Image
              alt="user image"
              height={300}
              width={300}
              src={user?.image}
            ></Image>
          </div>
          <div>
            <h1
              className={`${NotoSerifFont.className} text-[#1E1E1E] text-center text-[24px] md:text-[45px]`}
            >
              {user?.name}
            </h1>
            <p className="md:text-[20px] text-center text-[#9E9B98] font-semibold mt-3">
              {user?.email}
            </p>
            <Link href={"/update-profile"}>
              <button className="btn mt-3 border-0 w-full bg-[#536257] text-white">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
