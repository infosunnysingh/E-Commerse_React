import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';





function Footer() {
    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white';
  return (
    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
        <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px]"><b>Sunny Singh</b></h1>
        <p>
        An IT professional with a passion for tailored solutions seeks the position of Web Developer in a thriving, exciting, and growing company. Comes with a B.tech degree in Information Technology and experience with HTML, CSS, JavaScript, React JS, C, & C++, to provide quality support to the company’s 
        IT team in developing and deploying web-based event and registration software tools.
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + ` bg-blue-700`}>
            <FacebookOutlinedIcon />
          </div>
          <div className={socialStyle + ` bg-orange-500`}>
            <InstagramIcon />
          </div>
          <div className={socialStyle + ` bg-sky-400`}>
            <TwitterIcon />
          </div>
          <div className={socialStyle + ` bg-red-600`}>
            <PinterestIcon/>
          </div>
        </div>
    </div>

    <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
            <LocationOnIcon className="text-[#8a4af3]"/>
            <p className='pl-3'>State of India</p>
        </div>
        <div className="flex m-3">
            <LocalPhoneIcon className="text-[#521da8]"/>
            <p className='pl-3'>+919693929581</p>
        </div>
        <div className="flex m-3">
            <LocalPhoneIcon className="text-[#521da8]"/>
            <p className='pl-3'>+919424949681</p>
        </div>
        <div className="flex m-3">
            <EmailOutlinedIcon className="text-[#8a4af3]"/>
            <p className='pl-3'>sunnyjisce@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;