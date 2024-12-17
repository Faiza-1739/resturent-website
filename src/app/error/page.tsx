import Link from "next/link"
export default function Error(){
    return(
        <div>
            <div className="w-[632px] h-[342px]  mt-24 relative left-[364px]">
                <div className="w-[161px] h-[104px] font-[700px] text-[96px] leading-[96px] text-orange-500 mt-4 relative left-56">404</div>
                <div className="w-[630px] h-[40px] font-[700px] text-[32px] leading-[40px] relative left-6">Oops! Look likes something going wrong</div>
            <div className="w-[490px] h-[52px] font-[400px] text-[18px] leading-[26px] relative left-20 mt-9">Page Cannot be found! we’ll have it figured out in no time <br />.
             <span className="relative left-16">Menwhile, cheek out these fresh ideas:</span></div>
             <Link href={"/menu"}><button className="bg-orange-500 text-white w-[197px] h-[58px] bordered-[6px] mt-[15px]  relative left-52">Go To Home</button></Link>
            </div>
        </div>
    )
}