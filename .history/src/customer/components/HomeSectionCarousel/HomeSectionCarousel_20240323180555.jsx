import React from 'react'
import AliceCarousel from 'react-alice-carousel'

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
  return (
    <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        responsive={responsive}
    />
    </div>
  )
}

export default HomeSectionCarousel
