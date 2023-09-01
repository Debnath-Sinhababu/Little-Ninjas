import React from "react";
import StarRateIcon from '@mui/icons-material/StarRate';
const ReviewCard = () => {
  return (
    <div className="w-[650px] h-[400px] bg-slate-500 rounded-lg flex flex-col items-center mx-auto p-10 justify-between gap-10">
      <p className="w-[600px] break-words overflow-auto example">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="w-full  flex justify-between items-center">
       <div className="flex justify-center items-center gap-5">
       <img src='/studentimage1.jpg' className='w-[80px] h-[80px] rounded-full border border-white object-contain mt-0'/>
         <div className="flex flex-col items-start">
            <p className="text-white font-bold text-lg">Debnath Sinhababu</p>
            <p className="text-gray-800 font-semibold">DSA Batch</p>
         </div>
       </div>
       <div>
       <StarRateIcon style={{color:'#d4af37'}}/> 
        <StarRateIcon style={{color:'#d4af37'}}/>
        <StarRateIcon style={{color:'#d4af37'}}/>
        <StarRateIcon style={{color:'#d4af37'}}/>
       </div>
      </div>
    </div>
  );
};

export default ReviewCard;
