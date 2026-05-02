"use client"

import { authClient } from '@/lib/auth-client';
import { NotoSerifFont } from '@/lib/font';
import { redirect } from 'next/navigation';
import React from 'react';

const UpdateProfilePage = () => {

    const handleUpdate = async(e) => {
         e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
       name: name,
       image: image,
    })

    redirect('/my-profile');

    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="bg-white shadow rounded-md md:w-127.75  mx-auto p-10 md:p-15.75">
                   <h3 className={`${NotoSerifFont.className} text-[30px]`}>Update Profile Information</h3>
                   <p className="text-[#444748] mt-2  text-[13px] md:text-[16px]">
                     Refine your digital presence. Keep your contact details and profile imagery current to better showcase your curated collections.
                   </p>
                   <form 
                   onSubmit={handleUpdate}
                   >
                     <legend className="mt-10">Name</legend>
                     <input
                     minLength={4}
                       type="text"
                       name='name'
                       className="w-full border-b border-[#9E9B98]/60 mt-1 p-2 md:p-3.5"
                       placeholder="Enter your name"
                       
                     ></input>
                    
           
           
                     <legend className="mt-10">Image URL</legend>
                     <input
                       type="text"
                       name='image'
                       className="w-full border-b border-[#9E9B98]/60 mt-1 p-2 md:p-3.5"
                       placeholder="Enter image URL"
                       
                     ></input>
                    
           
                     <button className="btn border-0 rounded-none bg-[#536257] text-white mt-10 w-full py-5">
                       Update Information
                     </button>
                   </form>
                 </div>
        </div>
    );
};

export default UpdateProfilePage;