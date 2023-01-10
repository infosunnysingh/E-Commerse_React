import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function Navbar() {
    const style = "text-[14px] cursor-pointer ml-[25px]  mobile:ml-[5px] "
  return (
    <div className='navbar h-[60px] shadow-md relative z-10 '>
        <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px]
        flex justify-between items-center mobile:pl-0 mobile:pr-0'>

            {/* left div */}
            <div className='left flex flex-1 items-center'>
                <div className='language cursor-pointer text-[16px]  mobile:hidden'>EN</div>

                <div className="searchContainer flex border-[2px]
                 border-solid border-lighgrey rounded-md items-center ml-[10px] p-[5px]
                 focus-within:border-[#8a4af3] transition-all ">
                    <input type="text"  className='input outline-none mobile:w-[50px]'/>
                    <SearchIcon className='' style={{fontSize : '20px'}}/>
                </div>
            </div>

            {/* LOGO part */}

            <div className='flex-1 center text-center mobile:ml-6 '>
                <div className='logo font-bold text-lg'>N O V A</div>
            </div>

            {/* Right part */}
            <div className='right flex flex-1 items-center justify-end 
            mobile:justify-center mobile:flex-[2]'>
                <div className={style}>Register</div>
                <div className={style}>Sign in</div>
                <div className={style}>
                <Badge badgeContent={2} color="primary">
                    <ShoppingCartOutlinedIcon/>
                </Badge>
                </div>
            </div>

        </div> 

    </div>
  )
}

export default Navbar