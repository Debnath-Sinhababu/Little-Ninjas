'use client';
import Image from 'next/image'
import HeroBanner from '@/components/HeroBanner';
import { Typewriter } from 'react-simple-typewriter'
import Levels from '@/components/Levels';
import ReviewCard from '@/components/ReviewCard';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-center items-center p-24 w-full  overflow-hidden ">
      <HeroBanner/>
      <div className='w-full h-[160px] flex justify-between items-center bg-[#292929] p-10 mx-auto'
>
       <div className='w-[257px] h-[108px] font-[500] text-[32px] leading-[36px] text-center text-white'>
       15,000+ 
       <br></br>
       students taught
       </div>
        <div className='w-[109px] border border-white rotate-[-89.48deg]'> </div>
       <div className='w-[257px] h-[108px] font-[500] text-[32px] leading-[36px] text-center text-white'>
       50,000+ 
       <br></br>
       classes taken
       </div>
       <div className='w-[109px] border border-white rotate-[-89.48deg]'> </div>
       <div className='w-[257px] h-[108px] font-[500] text-[32px] leading-[36px] text-center text-white'>
       500+ 
       <br></br>
       registered mentors
       </div>
       <div className='w-[109px] border border-white rotate-[-89.48deg]'> </div>
       <div className='w-[257px] h-[108px] font-[500] text-[32px] leading-[36px] text-center text-white'>
       7,500+   <br></br>
       projects created
       </div>
       <div className='w-[109px] border border-white rotate-[-89.48deg]'> </div>
       <div className='w-[257px] h-[108px] font-[500] text-[32px] leading-[36px] text-center text-white'>
       15+   <br></br>
       country presence
       </div>
      </div>
      <p className='w-full h-[39px] text-[32px] leading-[38.73px] font-normal text-white mx-auto  text-center mt-10'>LEVELS</p>
      <div className='w-full mx-auto flex justify-center items-center flex-col p-10 overflow-x-scroll example'>
        
        <Levels/>
      </div>
       <p className='w-full h-[80px] text-[54px] leading-[80px] text-center text-white'>STUDENT REVIEW </p>
        <div className='w-full h-[418px] flex justify-between items-center p-10 gap-20 overflow-auto example'>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
        </div>
    </main>
  )
}
