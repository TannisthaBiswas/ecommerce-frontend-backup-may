import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Box, Grid } from '@mui/material'
import OrderTracker from './OrderTracker'import StarIcon from "@mui/icons-material/Star";

import { deepPurple } from '@mui/material/colors'

const OrderDetails = () => {
    return (
        <div className=" px-2 lg:px-36 space-y-7 ">
            <Grid container className="p-3 shadow-lg">
                <Grid xs={12}>
                    <h1 className="font-semibold text-xl py-2">Delivery Address</h1>
                </Grid>
            </Grid>
            <div className='py-7'>
                <OrderTracker activeStep={3} />
            </div>
            
            <Grid container className="space-y-5">
        {[1,1,1].map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://www.subdued.com/media/catalog/product/t/p/tp0m3u5col493-1_2.jpg?optimize=high&fit=bounds&height=&width=&canvas"
            
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">title</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: S</span>
                  </p>
                  <p>Seller: ClearBlue</p>
                  <p>₹2000 </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
        ))}
      </Grid>
                               
        </div>
    )
}

export default OrderDetails
