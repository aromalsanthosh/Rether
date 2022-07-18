import React from "react";

import logo from "../../images/logo4.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Market
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Exchange
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Tutorials
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Wallets
        </p>
      </div>   
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
    <p className="text-white text-base text-center mx-1 cursor-pointer mt-2">  
          ©2022 KTU Mini Project done by 
          <a href="https://aromalsanthosh.com" target="_blank" className="text-white text-base text-center mx-2 cursor-pointer">Aromal S</a>,
          <a href="" className="text-white text-base text-center mx-2 cursor-pointer">Noel Jose TP</a>
          &
          <a href="" className="text-white text-base text-center mx-2 cursor-pointer">Pooja M</a>
    </p>
  </div>
);

export default Footer;
