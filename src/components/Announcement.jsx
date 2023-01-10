import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react";


function Announcement() {
  const[announceStyle, setAnnounceStyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center');
  
  const handleClose = () => {
    setAnnounceStyle(announceStyle + " hidden");
  }
  return (
    <div className={announceStyle}>
    <h2>Hurry Up it's 40% off now </h2>

    <CloseIcon className='cursor-pointer' onClick={handleClose}/>
    </div>

  )
}

export default Announcement