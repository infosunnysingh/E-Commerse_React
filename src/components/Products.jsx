import React from 'react'
import { ApiTopPropduct } from '../apifolder/TopProductsApi'
import Product from './Product'
function Products() {
  return (
    <div className='flex flex-wrap p-5 items-center justify-center'>
        {ApiTopPropduct.map((product,index)=>(
            <Product item={product} key={index}/>
        ))}
    </div>
  )
}

export default Products;