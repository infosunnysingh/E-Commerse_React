import React from 'react'
import Announcement from '../components/Announcement'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/Newsletter'

function Cart() {
    const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
    const ProductDivStyle = "flex w-[100%] h-auto items-center mobile:flex-col";
    const PriceQuantityStyle ="flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7";
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <div className='p-3'>
            <div className='flex justify-center text-5xl'>Cart</div>

            {/* upper buttons div  */}
            <div className='flex items-center justify-between mt-4 mobile:flex-col'>
                <button className='btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white mt-0'>
                    Continue Shopping
                    </button>
                <div className='flex underline text-lg hover:cursor-pointer mobile:m-5'>
                    <p>Items in cart : 3 </p>
                    <p className='m-5'>Wishlist Items: 0</p>
                </div>
                
                <button className='btn mt-0'>Cheakout Now</button>
            </div>

            {/* vertically center parent div  */}
            <div className='flex flex-row mt-7 mobile:flex-col'>
                {/* product div  */}
                <div className='flex flex-col flex-1'>
                    {/* 1st product  */}
                    <div className={ProductDivStyle}>
                        <div className=' product flex pl-5 self-start'>
                        <img
                            className="product_img w-[7rem]"
                            src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                            alt="product_img"
                         />

                         <div className='disc flex items-start justify-between h-auto flex-col ml-6'>
                            <p>
                                <b className='mr-2'>ID:</b> 123456
                            </p> 
                            <p>
                                <b className='mr-2'>Product:</b> Dazzling Sky 
                            </p>
                            <p className="flex items-center justify-center">
                                <b className="mr-2">Color:</b>
                                <div className="colorSelect bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                            </p>

                            <p>
                                <b className="mr-2">Size:</b>M 
                            </p>
                         </div>
                        </div>

                        {/* price and Quantity  */}
                        <div className={PriceQuantityStyle}>
                            <Counter/>
                            <p className='flex items-center justify-center text-4xl mt-3'>
                                <b>Rs.370</b>
                            </p>
                        </div>
                    </div>

                    <hr className="mb-7 mt-7 mobile:mt-0" />

                    {/* 2ns product div  */}
                    <div className={ProductDivStyle}>

                        <div className=' product flex pl-5 self-start'>
                        <img
                             className="product_img w-[7rem]"
                             src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                             alt="product_img"
                            />
                            <div className='disc flex items-start justify-between h-auto flex-col ml-6'>
                            <p>
                                <b className="mr-2">ID:</b>1236456
                            </p>
                            <p>
                                <b className='mr-2'>Product:</b>Dazzing sky Shirt
                            </p>
                            <p className='flex items-center justify-center'>
                                <b className="mr-2">Color:</b>
                                <div className='colorSelect bg-sky-500 ml-1 w-[20px] h-[20px]'></div>
                            </p>
                            <p>
                            <b className="mr-2">Size:</b>M
                            </p>
                            </div>
                        </div>

                        {/* price and quantity  */}
                        <div className={PriceQuantityStyle}>
                        <Counter />
                        <p className="flex items-center justify-center text-4xl mt-3">
                            <b>Rs.340</b>
                        </p>
                        </div>
                    </div>

                    <hr  className="mb-7 mt-7 mobile:mt-0" />
                    {/* 3rd product  */}

                    <div className={ProductDivStyle}>
                        <div className=" product flex pl-5 self-start">
                        <img
                            className="product_img w-[7rem]"
                            src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                            alt="product_img"
                         />
                         <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                         <p>
                            <b className="mr-2">ID:</b>123456789
                         </p>
                         <p>
                            <b className='mr-2'>Product:</b>Dazzing Sky Shirt
                         </p>
                         <p className="flex items-center justify-center">
                        <b className="mr-2">Color:</b>
                        <div className="colorSelect bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                        </p>
                        <p>
                        <b className="mr-2">Size:</b>M
                        </p>
                         </div>
                        </div>

                        {/* price and quantity div  */}
                        <div className={PriceQuantityStyle}>
                            <Counter/>
                            <p className="flex items-center justify-center text-4xl mt-3">
                                <b>Rs.380</b>
                            </p>
                        </div>
                    </div>
                    <hr className="mb-7 mt-7 mobile:mt-0"/>
                </div>
                <div className="Summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mobile:mb-6">
                    <h1 className="text-[2rem]">SUMMARY</h1>
                    <div className={SummaryItemStyle}>
                    <p>SubTotal:</p>
                    <p>RS.740</p>
                </div>
                <div className={SummaryItemStyle}>
                    <p>Shipping:</p>
                    <p>Rs.810</p>
                </div>

                <div className={SummaryItemStyle}>
                  <p>Shipping Discount:</p>
                  <p>-$10</p>
                </div>
                <div className={SummaryItemStyle + " text-3xl font-bold"}>
                    <p>Total:</p>
                    <p>Rs.940</p>
                </div>
                </div>
            </div>
            <NewsLetter/>
            <Footer/>
        </div>
    </div>
  )
}

export default Cart