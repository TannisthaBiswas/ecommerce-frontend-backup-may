import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Grid } from '@mui/material'
import OrderTracker from './OrderTracker'

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
            <Grid className="space-y" container>
                <Grid item container className='shadow-xl rounded-md p-5 border'
                    sx={{ alignItems: "center", justifyContent: "space-between" }}
                >
                    <Grid items xs={6}>
                        <div>

                            <img className="w-[5rem] h-[5rem] object-cover object-top"
                                src="https://www.subdued.com/media/catalog/product/t/p/tp0m3u5col493-1_2.jpg?optimize=high&fit=bounds&height=&width=&canvas"
                                alt='' />
                        </div>
                        <div className="ml-5 space-y-2">
                  <p className="">product title</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: S</span>
                  </p>
                  <p>Seller: ClearBlue</p>
                  <p>₹5000 </p>
                </div>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    )
}

export default OrderDetails
