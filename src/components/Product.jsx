import {React,useState} from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function Product({item}) {
    const iconStyle = "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:opacity-1 hover:bg-[rgba(0,0,0,0.2)] hover:bg-[#894af3] hover:text-white hover:scale-[1.1] easy-in duration-100 cursor-pointer";
    const [hoverEffect, setHoverEffects] = useState('opacity-0')
    const handleHoverEnter = () =>{
        setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]')
    } 
    const handleHoverExit = () =>{
        setHoverEffects(' opacity-0')
    }
    return (
    <div className='flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden
    rounded-md shadow-lg m-2 relative' onMouseEnter={handleHoverEnter}
    onMouseLeave={handleHoverExit}>
        <img src={item.src} alt="product_image" />
        <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100`+hoverEffect}>
            {/* icons  */}

            <div className={iconStyle}>
                <ShoppingCartOutlinedIcon/>
            </div>
            <div className={iconStyle}>
                <FavoriteBorderOutlinedIcon/>
            </div>
            <div className={iconStyle}>
                <SearchOutlinedIcon/>
            </div>

        </div>
    </div>
  )
}

export default Product