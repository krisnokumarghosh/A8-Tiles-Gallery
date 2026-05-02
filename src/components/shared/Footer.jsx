import { NotoSerifFont } from "@/lib/font";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#D6D3D1]/60 pt-15">
      <footer className="footer sm:footer-horizontal text-base-content p-10">
        <nav>
          <h6
            className={`${NotoSerifFont.className} text-[18px] font-semibold text-[#1C1917]`}
          >
            Tiles Gallery
          </h6>
          <p className="w-75 mt-6 text-[#57534E]">
            Curating texture and form for the modern architect and discerning
            designer.
          </p>
        </nav>
        <nav className={`${NotoSerifFont.className} text-[#57534E]`}>
          <h6 className="text-[#1C1917] text-[16px] mb-4 font-semibold">
            Company
          </h6>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Terms Of Service</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav className={`${NotoSerifFont.className} text-[#57534E]`}>
          <h6 className="text-[#1C1917] text-[16px] mb-4 font-semibold">
            Social
          </h6>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Pinterest</a>
        </nav>
      </footer>
      <footer className="footer text-base-content border-[#57534E]/30 border-t px-10 py-10">
        <p className={`${NotoSerifFont.className} text-[#57534E]`}>
          2024 Tiles Gallery. Curated Texture & Forms
        </p>
      </footer>
    </div>
  );
};

export default Footer;
