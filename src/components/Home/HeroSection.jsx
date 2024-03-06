import React from 'react';
import Elips from "@/../public/images/Ellipse 2.png";
import Image from "next/image";
import Banner from "@/../public/images/banner.png"

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="image-container">
        <Image src={Elips} alt="elips" className="image" width={679} height={679} />
        <div className='layout-container'>
          <div className="">
            <div className="image-text flex-container">
                <div  className=" flex-container">
                <div><h1 className="section-header">Building digital products, brands & experiences</h1>
              <p className="p-text margin-top">Digital Agency is your online team management tool that is easy and prompt.</p>
              <button className="btn1 margin-top">Contact Us</button>
              </div>
              <div className=" img-container">
              <Image src={Banner} alt="Banner" width={450} height={450} />
            </div>
                </div>
               
            
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
