'use client'
import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid"; 
import { useRouter } from "next/navigation";
import {BiSolidDashboard} from "react-icons/bi"
import {PiStudentFill} from "react-icons/pi"
import {SiCoursera} from "react-icons/si"
import {RiPresentationLine} from "react-icons/ri"

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className=" w-49 h-full bg-white  "
            src="/ferox-transparent.jpg.jpg"
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-orange-100 text-blue-500"
                : "text-black-400 text-xl hover:bg-blue-100 hover:text-blue-500"
            }`}
          >
            <div className="mr-2">
            <BiSolidDashboard/>
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/students">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-blue-100 text-blue-500"
                : "text-black-400 text-xl hover:bg-blue-100 hover:text-blue-500"
            }`}
          >
            <div className="mr-2">
              <PiStudentFill/>
            </div>
            <div>
              <p>Students</p>
            </div>
          </div>
        </Link>
        
        <Link href="/courses">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-blue-100 text-blue-500"
                : "text-black-400 text-xl hover:bg-blue-100 hover:text-blue-500"
            }`}
          >
            <div className="mr-2">
              
              <SiCoursera />
            </div>
            <div>
              <p>Course</p>
            </div>
          </div>
        </Link>
        <Link href="/attendance">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-blue-100 text-blue-500"
                : "text-black-400 text-xl hover:bg-blue-100 hover:text-blue-500"
            }`}
          >
            <div className="mr-2">
              <RiPresentationLine />
            </div>
            <div>
              <p>Attendanse</p>
            </div>
          </div>
        </Link>
        {/* <Link href="/accounts">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }`}
          >
            
            
          </div> */}
        {/* </Link> */}
       
       
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
