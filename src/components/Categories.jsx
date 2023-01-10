import React from 'react'
import Category from './Category'
import { ApiCategories } from '../apifolder/CategoryApi'
function Categories() {
  return (
    <div className='flex justify-between items-center p-5'>
       {ApiCategories.map((category,index)=>(
        <Category item={category} key={index}/>
       ))}
    </div>
    
  )
}

export default Categories