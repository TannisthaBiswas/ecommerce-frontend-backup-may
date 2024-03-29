import React from 'react'
import "./ProductCard.css"

const ProductCard = ({product}) => {
  return (
    <div className='productCard  bg-zinc-100 w-[15rem] m-3 transition-all cursor-pointer rounded-lg'>
     <div className='h-[20rem]'>
      <img className=" rounded-t-lg h-full w-full object-cover object-left-top " 
      src={product.imageUrl} alt="Can't load image"/>
     </div>
     <div className='cardtext p-3'>
<div>
  <p className='font-bold'>Pepper</p>
  <p className='opacity-60 font-semibold'>{product.name}</p>
</div>
     </div>

     <div className='flex flex-wrap items-centre space-x-2'>
     <p className='font-semibold px-2'>₹{product.price}</p>
      <p className='line-through font-semibold opacity-50'>₹{product.markedPrice}</p>
      <p className="text-green-600">{product.discount}% off</p>
     </div>
    </div>
  )
}

export default ProductCard
 