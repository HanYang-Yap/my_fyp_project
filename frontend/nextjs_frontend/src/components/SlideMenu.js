'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IconMenu from '../assets/icon-menu.png';

export default function SlideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu Button */}
      <button 
        onClick={toggleMenu}
        className="p-2 fixed top-4 left-4 z-50"
      >
        <div className="bg-gray-50 hover:bg-gray-200 w-[40px] h-[40px] shadow-md rounded-2xl relative">
          <Image src={IconMenu} alt="Menu" className="w-[24px] h-[24px] absolute top-[8px] left-[8px]" />
        </div>
      </button>

      {/* Sidebar Menu */}
      <div 
        className={`bg-gray-800 text-gray-50 min-w-[200px] w-[250px] h-full transition-all duration-300 
          fixed top-0 left-0 z-20 items-center flex flex-col p-[30px] pt-[60px] shadow-xl overflow-x-hidden overflow-y-auto 
          ${isOpen ? 'translate-x-0' : '-translate-x-[100%]'}`}
      >
        <div className="flex flex-col w-full">
          <Link href="/home" className="flex items-center justify-start min-w-[150px] w-full p-3 px-4 mt-5 hover:bg-gray-700 hover:text-white rounded">
            <i className="fas fa-home w-5"></i>
            <span className="ml-3">首頁</span>
          </Link>

          <Link href="/profile" className="flex items-center justify-start min-w-[150px] w-full p-3 px-4 mt-2 hover:bg-gray-700 hover:text-white rounded">
            <i className="fas fa-user w-5"></i>
            <span className="ml-3">個人資料</span>
          </Link>

          <Link href="/portfolioUpload" className="flex items-center justify-start min-w-[150px] w-full p-3 px-4 mt-2 hover:bg-gray-700 hover:text-white rounded">
            <i className="fas fa-folder w-5"></i>
            <span className="ml-3">學習歷程</span>
          </Link>

          <Link href="/pastExam" className="flex items-center justify-start min-w-[150px] w-full p-3 px-4 mt-2 hover:bg-gray-700 hover:text-white rounded">
            <i className="fas fa-book w-5"></i>
            <span className="ml-3">考古題庫</span>
          </Link>

          <Link href="/schedule" className="flex items-center justify-start min-w-[150px] w-full p-3 px-4 mt-2 hover:bg-gray-700 hover:text-white rounded">
            <i className="fas fa-calendar w-5"></i>
            <span className="ml-3">日程表</span>
          </Link>

          <Link href="/settings" className="flex items-center justify-start min-w-[150px] w-full p-3 px-4 mt-2 hover:bg-gray-700 hover:text-white rounded">
            <i className="fas fa-cog w-5"></i>
            <span className="ml-3">設定</span>
          </Link>

          <Link href="/faq" className="flex items-center justify-start min-w-[150px] w-full p-3 px-4 mt-2 hover:bg-gray-700 hover:text-white rounded">
            <i className="fas fa-question-circle w-5"></i>
            <span className="ml-3">常見問題</span>
          </Link>

          <Link href="/logout" className="flex items-center justify-start min-w-[150px] w-full p-3 px-4 mt-2 hover:bg-gray-700 hover:text-white rounded">
            <i className="fas fa-sign-out-alt w-5"></i>
            <span className="ml-3">登出</span>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      <div 
        onClick={toggleMenu}
        className={`fixed top-0 left-0 w-full h-full bg-black/40 transition-opacity duration-300 z-10
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      />
    </>
  );
} 