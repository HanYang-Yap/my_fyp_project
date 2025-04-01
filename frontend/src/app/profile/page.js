import Image from "next/image";
import MenuBtn from "../menuBtn"

export default function Profile() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-300">
      
      {/* the html file in public folder */}
      <iframe src="/profile.html" className="w-full h-full" />

    </div>
  );
}
