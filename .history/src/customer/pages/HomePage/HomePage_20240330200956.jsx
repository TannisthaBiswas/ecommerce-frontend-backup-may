import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import womenTopsData from '../../../Data/WomensTop'
import AuthModal from './customer/Auth/AuthModal';

const HomePage = () => {
  return (
    <div className='object-cover bg-gradient-to-t h-480 w-960'>
      {/*<img src='https://designstripe-secure.imgix.net/scene-snapshots/9206a80b-96ed-433f-9ef1-65ae5c232dd0/1669374585420/gif?auto=compress&gif-q=60&fit=clip&h=400&s=e14c48b7a50bc6a5911ba324e3921803?bust=1706430725474'></img>*/}
      <div>
        <MainCarousel />
      </div>

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={womenTopsData} sectionName={"NEW ARRIVALS"}/>
        <HomeSectionCarousel data={womenTopsData} sectionName={"WOMEN"}/>
        <HomeSectionCarousel data={womenTopsData} sectionName={"MEN"}/>
        <HomeSectionCarousel data={womenTopsData} sectionName={"ACCESSORIES"}/>
        <HomeSectionCarousel data={womenTopsData} sectionName={"SKINCARE AND COSMETICS"}/>
        <HomeSectionCarousel data={womenTopsData} sectionName={"ELECTRONICS"}/>
      </div>

    </div>
  )
}

export default HomePage
