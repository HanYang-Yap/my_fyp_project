'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from 'react'
import IconMenu from "@/../public/menu.png";
import AvatarImg from "@/../public/blankProfilePic.webp";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user')
      const data = await response.json()
      setUser(data)
    }
    fetchUser()
  }, [])

  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <div className="w-screen h-screen relative gap-5 bg-gray-200 box-border" style={{"--navbar-width": "20%"}}>

          <div className={`bg-gray-800 text-gray-50 min-w-[200px] w-[var(--navbar-width)] h-full transition-all duration-300 
            fixed top-0 left-0 z-20 items-center flex flex-col p-[30px] pt-[60px] shadow-xl overflow-x-hidden overflow-y-auto 
            ${isOpen ? 'translate-x-0' : '-translate-x-[100%]'}`}>

            <img 
              src={user?.profileImage || AvatarImg.src} 
              alt="Avatar" 
              className="w-[40px] h-[40px] mt-6 rounded-full"
            />
            <h1 className="mt-4">{user?.name || '使用者'}</h1>

            <div>
              
              {/* navbar頁面切換 */}

              <Link href="/home">
                <div className={`flex items-center justify-start min-w-[150px] w-[16vw] p-3 px-4 mt-5 hover:bg-gray-700 hover:text-white rounded`}>
                  <i className="fas fa-home w-5"></i>
                  <span className="ml-3">首頁</span>
                </div>
              </Link>

              <Link href="/profile">
                <div className={`flex items-center justify-start min-w-[150px] w-[16vw] p-3 px-4 mt-2 hover:bg-gray-700 hover:text-white rounded`}>
                  <i className="fas fa-user w-5"></i>
                  <span className="ml-3">個人資料</span>
                </div>
              </Link>

              {/* /portfolio? connect to the latest page? */}
              <Link href="/portfolioUpload"> 
                <div className={`flex items-center justify-start min-w-[150px] w-[16vw] p-3 px-4 mt-2 hover:bg-gray-700 hover:text-white rounded`}>
                  <i className="fas fa-folder w-5"></i>
                  <span className="ml-3">學習歷程</span>
                </div>
              </Link>

              <Link href="/">
                <div className={`flex items-center justify-start min-w-[150px] w-[16vw] p-3 px-4 mt-2 hover:bg-gray-700 hover:text-white rounded`}>
                  <i className="fas fa-book w-5"></i>
                  <span className="ml-3">考古題庫</span>
                </div>
              </Link>

              <Link href="/schedule">
                <div className={`flex items-center justify-start min-w-[150px] w-[16vw] p-3 px-4 mt-2 hover:bg-gray-700 hover:text-white rounded`}>
                  <i className="fas fa-calendar w-5"></i>
                  <span className="ml-3">日程表</span>
                </div>
              </Link>

              <Link href="/settings">
                <div className={`flex items-center justify-start min-w-[150px] w-[16vw] p-3 px-4 mt-2 hover:bg-gray-700 hover:text-white rounded`}>
                  <i className="fas fa-cog w-5"></i>
                  <span className="ml-3">設定</span>
                </div>
              </Link>
              
              <Link href="/faq">
                <div className={`flex items-center justify-start min-w-[150px] w-[16vw] p-3 px-4 mt-2 hover:bg-gray-700 hover:text-white rounded`}>
                  <i className="fas fa-question-circle w-5"></i>
                  <span className="ml-3">常見問題</span>
                </div>
              </Link>

              <Link href="/logout" className="mt-auto">
                <div className={`flex items-center justify-start min-w-[150px] w-[16vw] p-3 px-4 mt-2 hover:bg-gray-700 hover:text-white rounded`}>
                  <i className="fas fa-sign-out-alt w-5"></i>
                  <span className="ml-3">登出</span>
                </div>
              </Link>

            </div>

          </div>

          {/* Toggle Button */}
          <button onClick={() => setIsOpen(!isOpen)}
              className="p-2 fixed top-4 left-4 z-50">
            <div className="bg-gray-50 hover:bg-gray-200 w-[40px] h-[40px] shadow-md rounded-2xl relative">

              <Image src={IconMenu} alt="Menu" className="w-[24px] h-[24px] absolute top-[8px] left-[8px]" />
            </div>
          </button>

          {/* Overlay */}
          <div 
            onClick={() => setIsOpen(false)}
            className={`fixed top-0 left-0 w-full h-full bg-black/40 transition-opacity duration-300 z-10
            ${isOpen ? 'lg:hidden opacity-100 visible' : 'opacity-0 invisible'}`}
          />

          <div className={`h-full transition-all duration-300 ${isOpen ? 'w-[calc(100%-var(--navbar-width))] ml-[var(--navbar-width)]' : 'w-screen'}`}>
            {children}
          </div>
                    
        </div>
      </body>
    </html> 
  );
}
