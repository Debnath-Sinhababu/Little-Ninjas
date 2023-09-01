import React from 'react'
import InputIcon from '@mui/icons-material/Input';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Header = () => {
  return (
    <div className='w-full border  h-[104px] shadow-shadow-custom bg-bg-header flex justify-center items-center px-10 mx-auto'>
        <div className=' w-full h-full flex justify-between items-center px-10'>
          
          <div className='flex justify-center items-center text-white'>
           <img src='/navbarlogo.png' className='w-[136px] h-[120px]'/>
           <p className='w-[224px] h-[48px] text-white ' style={{fontSize:39}}>
           LittleNinjas
           </p>
          </div>
         
        
          <div className='flex justify-center items-center  gap-[44px] w-[796px] h-[59px]'>
          <div  className='font-sans text-white text-3xl'
           style={{fontWeight:'500px'}}
          >
           Product
          </div>
          <div  className='font-sans text-white text-3xl'
           style={{fontWeight:'500px'}}
          >
           Contact
          </div>
          <div  className='font-sans text-white text-3xl'
            style={{fontWeight:'500px'}}
          >
           Learn
          
          </div>
          <div  className='font-sans text-white text-3xl'
            style={{fontWeight:'500px'}}
          >
          About
         
          </div>
          <div  className='font-sans text-white text-3xl'
            style={{fontWeight:'500px'}}
          >
         Labs
         
          </div>
          </div>
          <div className='flex justify-between items-center  w-[32%]  gap-[12px]'>
      
            <button className='pt-[9px] pr-[20px] pl-[20px] pb-[9px] text-3xl border border-blue-400 rounded-md  bg-bg-header-login text-white w-[148px] h-[60px] animatebtn'
             style={{fontWeight:'500px'}}
            >
              <p style={{width:'92px',height:'39px'}}>
              Login
              </p>
             
          
            </button>
            <button className=' border border-blue-400 rounded-md  bg-bg-header-login text-white w-[275px] h-[60px] text-2xl animatebtn'
             style={{fontWeight:'500px'}}
            >
               <p style={{width:'255px',height:'29px'}}>
               JOIN COMMUNITY 🔥
               </p>
              
               
             
          
            </button>
             <div>
             <DarkModeIcon style={{width:100,height:50}}/>
             </div>
          </div>
        </div>
     
    </div>
  )
}

export default Header
