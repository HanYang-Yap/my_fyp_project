import Image from "next/image";
import MenuBtn from "../menuBtn"

export default function PortfolioUpload() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-300">
      
      {/* in public/html folder */}
      <iframe src="html/portfolioUpload.html" className="w-full h-full" />

    </div>
  );
}
