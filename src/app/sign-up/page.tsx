export default function SignUp(){
    return(
        <div>
            <div className="w-[424px] h-[624px] border-2 border-black mt-10 relative left-[380px]">
                <div className="w-[80px] h-[28px] font-[700px] text-[20px] leading-[28px] relative left-7">Sign Up</div>
                <div className="w-[360px] h-[44px]  mt-[30px] border-2 p-2 relative left-7 flex">
                 <div className="w-[24px] h-[24px]  bg-[url('/images/User.png')] bg-cover"></div>   
                <div className="w-[41px] h-[24px] font-[400px] text-[16px] leading-[24px] relative left-4">Name</div>

                </div>
                <div className="w-[360px] h-[44px]  mt-[30px] border-2 p-2 relative left-7 flex">
                 <div className="w-[24px] h-[24px]  bg-[url('/images/Envelope.png')] bg-cover"></div>   
                <div className="w-[41px] h-[24px] font-[400px] text-[16px] leading-[24px] relative left-4">Email</div>

                </div>
      
                
                <div className="w-[360px] h-[44px]  mt-[30px] border-2 p-2 relative left-7 flex">
                 <div className="w-[24px] h-[24px]  bg-[url('/images/lock.png')] bg-cover"></div>   
                <div className="w-[41px] h-[24px] font-[400px] text-[16px] leading-[24px] relative left-4">Password</div>

                </div>
                <div className="w-[360px] h-[44px]  mt-[30px]  p-2 relative left-7 flex">
                 <div className="w-[24px] h-[24px]  bg-[url('/images/Cheek.png')] bg-cover"></div>   
                <div className="w-[121px] h-[24px] font-[400px] text-[14px] leading-[24px] relative left-4">Remember me?</div>

                </div>
                <button className="bg-orange-500 text-white w-[360px] h-[44px]  mt-[15px]  relative left-6">SignUp</button>
                <div className="w-[360px] h-[44px]  mt-1  p-2 relative left-[250px] flex">  
                <div className="w-[121px] h-[24px] font-[400px] text-[14px] leading-[24px] relative left-4">Forget password?</div>

                </div>
                <div className="w-[360px] h-[28px]  mt-[30px]  p-2 relative left-7  bg-[url('/images/or.png')] bg-cover"></div>
                <div className="w-[360px] h-[44px]  mt-[30px] border-2 p-2 relative left-7 flex">
                 <div className="w-[24px] h-[24px]  bg-[url('/images/Google.png')] bg-cover"></div>   
                <div className="w-[150px] h-[24px] font-[400px] text-[16px] leading-[24px] relative left-4">Sign up with Google</div>

                </div>
                <div className="w-[360px] h-[44px]  mt-[30px] border-2 p-2 relative left-7 flex">
                 <div className="w-[24px] h-[24px]  bg-[url('/images/Apple.png')] bg-cover"></div>   
                <div className="w-[150px] h-[24px] font-[400px] text-[16px] leading-[24px] relative left-4">Sign up with Apple</div>

                </div>
            </div>
        </div>
    )
}