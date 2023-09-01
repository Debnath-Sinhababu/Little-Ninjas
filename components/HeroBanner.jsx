import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const HeroBanner = () => {
  return (
    <div className='flex h-full w-full justify-between'>
    <div className='flex-1 flex flex-col justify-center items-center gap-10 '>
      <div className='text-7xl font-bold leading-10 text-white w-[949px] text-center'>
        <span>Learn </span>
      <Typewriter
          words={[' With Love', 'With Babbar']}
          loop={Infinity}
          cursor
          
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        
        />
      </div>
    
      <p className='text-[26px] leading-[46px] w-[406px] h-[100px] text-center text-white'>An all-in-one platform to learn <br></br>
      lorem ipsum 10

</p>
     <div className='flex justify-center gap-10 w-full'>
       <button className='w-[244px] h-[68px] rounded-xl text-white border border-white text-center glow-on-hover relative z-0'>
        <p className='w-[153px] h-[36px] text-center m-auto text-[20px] leading-[36px] text-white font-btnweight'>
        LEARN MATHS
        </p>
       
       </button>
       <button className='w-[214px] h-[68px] rounded-2xl text-white bg-mathbtncolor text-center glow-on-hover relative z-0 '>
        <p className='w-[164px] h-[36px] text-center m-auto text-[20px] leading-[36px] text-mathcolor font-btnweight'>
        LEARN CODING
        </p>
       
       </button>
     </div>
     <div className='w-[517px] h-[101px] flex items-center justify-between'>
       <div className='mt-0 p-0 flex items-center justify-center relative'>
       <img src='/studentimage1.jpg' className='w-[80px] h-[80px] rounded-full border border-white object-contain mt-0'/>
       <img src='/studentimage1.jpg' className='w-[80px] h-[80px] rounded-full border border-white object-contain mt-0 absolute left-[50px] z-10 top-0'/>
       <img src='/studentimage1.jpg' className='w-[80px] h-[80px] rounded-full border border-white object-contain mt-0 absolute left-[100px] z-10 top-0'/>
       <img src='/studentimage1.jpg' className='w-[80px] h-[80px] rounded-full border border-white object-contain mt-0 absolute left-[150px] z-10 top-0'/>
       <img src='/studentimage1.jpg' className='w-[80px] h-[80px] rounded-full border border-white object-contain mt-0 absolute left-[200px] z-10 top-0'/>
       
       </div>
       <div className='w-[200px] h-[100px] font-[500] text-[26px] leading-[40px] text-center text-white'>
       20,000+ 
       <br></br>
       Happy Students
       </div>
     </div>
    </div>
    <div className='flex-1'>
      <div className='w-[766px] h-[787px]'>
      <img src='/banner 1.png' className='w-full h-full object-cover animatebounce'/>
      </div>
    </div>
    </div>
  )
}

export default HeroBanner
