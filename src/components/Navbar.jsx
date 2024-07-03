import React from 'react';
import { TbCurrencySolana } from "react-icons/tb";


function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white h-[70px] absolute top-0 left-0 right-0 flex items-center navbar-with-background my-0.5 mx-0.5 rounded-xl">
      <div className="flex items-center">
        <TbCurrencySolana className="mr-2 text-4xl text-[#ffffff]" />
        <h3 className="text-2xl font-bold text-[#ffffff]">SOLPAY</h3>
      </div>
    </nav>
  );
}

export default Navbar;
