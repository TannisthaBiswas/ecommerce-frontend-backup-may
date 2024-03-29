import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadoe-lg overflow-hidden w-[15rem] mx-3'>
      <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' 
        src={product.imageUrl}
        alt=""/>
      </div>

      <div className='p-4'>
        <h3 className='textlg font-medium text-gray-900'>{product.name}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.name}</p>
      </div>

    </div>
  )
}

export default HomeSectionCard

