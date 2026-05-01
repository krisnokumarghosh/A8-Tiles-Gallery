"use client";

import React from "react";
import googleImg from "@/assets/google.png";
import Image from "next/image";
import { NotoSerifFont } from "@/lib/font";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { Toast } from "@heroui/react";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (iData) => {
    console.log(iData);
    const { name, email, photoUrl, password } = iData;

    const { data, error } = await authClient.signUp.email({
        name: name,
        email: email,
        image: photoUrl,
        password: password,
        callbackURL: "/",
    });

    console.log(data, error);
    
    if (error) {
      alert(error.message);
    }

    if (data) {
      alert("Registration Successfull");
    }
  };

  return (
    <div className="bg-[#FAF9F8] ">
      <div className="bg-white  shadow rounded-md md:w-127.75  mx-auto p-10 md:p-15.75">
        <p className="text-14px text-[#536257] text-center mb-4 font-semibold">
          JOIN OUR STUDIO
        </p>
        <h3 className={`${NotoSerifFont.className} text-center text-[30px]`}>
          Register
        </h3>
        <p className="text-[#444748] text-center mt-2 text-[13px] md:text-[16px]">
          Create an account to curate your collections.
        </p>
        <form onSubmit={handleSubmit(handleRegister)}>
          <legend className="mt-10">Name</legend>
          <input
            type="text"
            className="w-full border-b border-[#9E9B98]/60 mt-1 p-2 md:p-3.5"
            placeholder="Enter Your Name"
            {...register("name", { required: "Required field can't be empty" })}
          ></input>
           {
              errors.name && <p className="mt-1 text-[12px] text-red-500">{errors.name.message}</p>
            }


          <legend className="mt-10">Email</legend>
          <input
            type="email"
            className="w-full border-b border-[#9E9B98]/60 mt-1 p-2 md:p-3.5"
            placeholder="example@gmail.com"
            {...register("email", {
              required: "Required field can't be empty",
            })}
          ></input>
           {
              errors.email && <p className="mt-1 text-[12px] text-red-500">{errors.email.message}</p>
            }


          <legend className="mt-10">Photo URL</legend>
          <input
            type="text"
            className="w-full border-b border-[#9E9B98]/60 mt-1 p-2 md:p-3.5"
            placeholder="Enter Photo URL"
            {...register("photoUrl", {
              required: "Required field can't be empty",
            })}
          ></input>
           {
              errors.photoUrl && <p className="mt-1 text-[12px] text-red-500">{errors.photoUrl.message}</p>
            }


          <legend className="mt-10">Password</legend>
          <input
            type="password"
            className="w-full border-b border-[#9E9B98]/60 mt-1 p-2 md:p-3.5"
            placeholder="..........."
            {...register("password", {
              required: "Required field can't be empty",
            })}
          ></input>
          {
              errors.email && <p className="mt-1 text-[12px] text-red-500">{errors.email.message}</p>
            }


          <button className="btn border-0 rounded-none bg-[#536257] text-white mt-10 w-full py-5">
            Register
          </button>
        </form>
        <div className="divider mt-10 text-[13px] text-[#9E9B98]">
          OR Continue With
        </div>
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

export default RegisterPage;
