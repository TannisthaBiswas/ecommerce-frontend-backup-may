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
                sx={{ alignItems:"center", justifyContent: "space-between" }}
                >
                    <Grid items xs={6}>
<div>
      
    <img src="https://www.subdued.com/media/catalog/product/t/p/tp0m3u5col493-1_2.jpg?optimize=high&fit=bounds&height=&width=&canvas=:" alt=''/>
</div>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    )
}

export default OrderDetails
