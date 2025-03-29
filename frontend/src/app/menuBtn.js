'use client';
import { useState } from 'react';
import Image from "next/image";
import IconMenu from "@/../public/menu.png";


function MenuBtn() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 fixed top-4 left-4 z-50"
      >
        <Image src={IconMenu} alt="Menu" className="w-[24px] h-[24px]" />
      </button>
      
    </div>
  );
}
export default MenuBtn;