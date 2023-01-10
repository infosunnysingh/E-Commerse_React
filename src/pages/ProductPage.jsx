import React from 'react'
import Announcement from '../components/Announcement'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/Newsletter'

function ProductPage() {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <div className='flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3'>
            <div className='flex flex-1 items-center justify-center'>
                <img  src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216" alt='product_image' 
                className='w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300'/>
            </div>
            <div className='flex-[1.3] flex flex-col items-start justify-items-start mt-10 mobile:items-center'>
                  <h1 className='title text-[40px] mobile:text-[30px]'>Creamy Hoody Original Cotton</h1>
                  <p className='pr-[4rem] mt-4 text-justify mobile:pr-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Non nam provident doloremque sit est quisquam cumque 
                    maxime eum error ducimus quas esse aliquam ratione blanditiis,
                     ea quod perspiciatis aperiam excepturi.
                  </p>
                  <div  className="flex flex-col place-self-start">
                  <p className=' colors mt-7 text-3xl'>
                    Price:<b>Rs.589</b>
                    </p>

                  {/* color varient */}
                  <div className='colors flex text-2xl mt-7'>
                    Colors
                    <div className='bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
                    <div className='bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div> 
                    <div className='bg-green-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
                  </div>

                  <div className='mt-7 text-2xl'>
                    Size 
                    <select className='border-[2px] border-silver rounded-md ml-'>
                      <option select>Select</option>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div className='mt-7'>
                    <Counter/>
                  </div>
                  </div>

                  <button className='text-white bg-[#8a4af3] rounded-md shadow-md mt-[30px] p-3'>Add to cart</button>
            </div>
        </div>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default ProductPage