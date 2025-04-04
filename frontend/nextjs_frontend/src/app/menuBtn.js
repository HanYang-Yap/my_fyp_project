'use client';
import { useState } from 'react';
import Image from "next/image";
import IconMenu from "@/../public/menu.png";


function MenuBtn() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {/* Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)}
          className="p-2 fixed top-4 left-4 z-50">
        <div className="bg-gray-100 w-[40px] h-[40px] rounded-2xl relative">

          <Image src={IconMenu} alt="Menu" className="w-[24px] h-[24px] absolute top-[8px] left-[8px]" />
        </div>
      </button>
    </div>
  );
}
export default MenuBtn;