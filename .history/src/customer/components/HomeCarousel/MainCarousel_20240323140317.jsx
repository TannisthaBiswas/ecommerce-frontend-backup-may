import React from 'react'
import { mainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {


    const items = mainCarouselData.map((item)=> <img className='cursor-pointer'
    role='presentation' src={item.image} alt=""/>)




  return (
    <AliceCarousel
        //mouseTracking
        //items={items}
        //responsive={responsive}
        //controlsStrategy="alternate"
    />
  )
}

export default MainCarousel
