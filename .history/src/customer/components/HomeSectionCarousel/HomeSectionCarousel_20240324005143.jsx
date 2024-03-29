import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Button } from '@mui/material';
const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const items = [1, 1,1,1,1,1,1,1,1,1,1,1, 1, 1, 1].map((item) => <HomeSectionCard />)
    return (
        <div className='relative px-4 lg:px-8'>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    //autoPlay
                    //autoPlayInterval={1000}
                    infinite
                    responsive={responsive}
                />
                <Button variant="contained" className="z-50 bg-white" sx={{
                    position: 'absolute', top: "8rem",
                    right: "0rem", transform: "translateX(50%) rotate(90deg0", bgcolor: "white",
                }} aria-label="next">
                    <ArrowCircleUpIcon sx={{ transform: "rotate(90deg)" }} />
                </Button>

                <Button variant="contained" className="z-50 bg-white" sx={{
                    position: 'absolute', top: "8rem",
                    left: "0rem", transform: "translateX(50%) rotate(90deg0", bgcolor: "white",
                }} aria-label="next">
                    <ArrowCircleUpIcon sx={{ transform: "rotate(-90deg)" }} />
                </Button>
            </div>
        </div>
    )
}

export default HomeSectionCarousel
