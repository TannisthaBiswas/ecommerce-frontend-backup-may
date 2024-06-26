import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Button } from '@mui/material';
import womenTopsData from '../../../Data/WomensTop';
const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);

    const syncActiveIndex=({item})=>setActiveIndex(item)

    const items = womenTopsData.map((item) => <HomeSectionCard product={item} />)
    return (
        <div className='relative px-4 lg:px-8'>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    //autoPlay
                    //autoPlayInterval={1000}
                    //infinite
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length-5 && <Button
                onClick={slideNext}
                 variant="contained" className="z-50 bg-white" sx={{
                    position: 'absolute', top: "8rem",
                    right: "0rem", transform: "translateX(50%) rotate(90deg0", bgcolor: "white",
                }} aria-label="next">
                    <ArrowCircleUpIcon sx={{ transform: "rotate(90deg)" }} />
                </Button>}

                {activeIndex !== 0 &&<Button 
                onClick={slidePrev}
                variant="contained" className="z-50 bg-white" sx={{
                    position: 'absolute', top: "8rem",
                    left: "0rem", transform: "translateX(50%) rotate(90deg0", bgcolor: "white",
                }} aria-label="next">
                    <ArrowCircleUpIcon sx={{ transform: "rotate(-90deg)" }} />
                </Button>}
            </div>
        </div>
    )
}

export default HomeSectionCarousel
