import { MainLayout } from "./layout"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarBattery, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";


export default function Home(){
  return(
    <MainLayout isHome={true}>
     <div className="w-full h-[950px] bg-black ">
      <div className="w-[80%] h-[87px] px-48  py-6  ">
      <div className="w-[109px] h-[32px]  font-[700px] text-[24px] leading-[32px] text-orange-500 relative left-[45%]">Food <span className="text-white">tuck</span></div>
     <div className="flex justify-between">
     <ol className="text-white  gap-4 font-medium hidden sm:flex ">
              <Link href={"/"}>
                <li >Home</li>
              </Link>
              <Link href={"/menu"}>
                <li>Menu</li>
              </Link>
              <Link href={"/error"}>
                <li>Blogs</li>
              </Link>
              <Link href={"/pages"}>
                <li>Pages</li>
              </Link>
              <Link href={"/about"}>
                <li>About</li>
              </Link>
              <Link href={"/shop"}>
                <li>Shop</li>
              </Link>
              <Link href={"/contact"}>
                <li>Contact</li>
              </Link>
            </ol>
           
            <div className="text-white border-orange-500 border-2 rounded-full relative flex gap-10 px-6 py-1">Search 
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white text-lg py-1" />
            </div>
       
     </div>
      </div>
      <div className=" w-full flex gap-7">
      <div  className="bg-[url('/images/text.png')] bg-cover w-[390px] h-[293px] mt-11 relative left-5 "></div>
      <div  className="bg-[url('/images/eggsalad.png')] bg-cover w-[750px] h-[600px] "></div>
      </div>
      
      
      
     </div>
    </MainLayout>
  )
} 