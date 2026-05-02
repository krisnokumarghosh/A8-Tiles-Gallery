"use client";

import React from "react";
import googleImg from "@/assets/google.png";
import Image from "next/image";
import { NotoSerifFont } from "@/lib/font";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { errorToast, successToast } from "@/lib/toasts";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (iData) => {
    const { email, password } = iData;

    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      errorToast(error.message);
    }

    if (data) {
      successToast("Registration Successfull");
    }
  };

  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    toast.success("Login Successfull", {
      style: {
        borderLeft: "3px solid #536257",
        padding: "12px 16px",
        color: "#111827",
      },
      iconTheme: {
        primary: "#536257",
        secondary: "#fff",
      },
    });
  };

  return (
    <div className="bg-[#FAF9F8] h-screen flex items-center ">
      <div className="bg-white shadow rounded-md w-127.75  mx-auto p-10 md:p-15.75">
        <h3 className={`${NotoSerifFont.className} text-[30px]`}>Login</h3>
        <p className="text-[#444748] mt-2 text-[13px] md:text-[16px]">
          Enter your credentials to access your curated collection.
        </p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <legend className="mt-10">Email</legend>
          <input
            type="email"
            className="w-full border-b border-[#9E9B98]/60 mt-1 p-2 md:p-3.5"
            placeholder="example@gmail.com"
            {...register("email", {
              required: "Required field can't be empty",
            })}
          ></input>
          {errors.email && (
            <p className="mt-1 text-[12px] text-red-500">
              {errors.email.message}
            </p>
          )}

          <legend className="mt-10">Password</legend>
          <input
            type="password"
            className="w-full border-b border-[#9E9B98]/60 mt-1 p-2 md:p-3.5"
            placeholder="..........."
            {...register("password", {
              required: "Required field can't be empty",
            })}
          ></input>
          {errors.password && (
            <p className="mt-1 text-[12px] text-red-500">
              {errors.password.message}
            </p>
          )}

          <button className="btn border-0 rounded-none bg-[#536257] text-white mt-10 w-full py-5">
            Login
          </button>
        </form>
        <div className="divider mt-10 text-[13px] text-[#9E9B98]">
          OR Continue With
        </div>
        <button
          onClick={handleGoogleLogin}
          className="mt-10 flex items-center btn bg-transparent py-5 w-full text-[31A1C1C] border-[#9E9B98]"
        >
          <Image
            alt="google logo"
            height={16}
            width={16}
            src={googleImg}
          ></Image>
          <p>Login With Google</p>
        </button>
        <p className="text-[#9E9B98] text-[14px] mt-10 text-center">
          Dont have an account?{" "}
          <span className="text-[15px] text-[#1E1E1E] font-semibold">
            <Link href={"/register"}>Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
