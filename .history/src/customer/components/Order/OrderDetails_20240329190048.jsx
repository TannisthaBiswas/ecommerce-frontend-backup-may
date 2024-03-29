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
                <OrderTracker activeStep={3}/>
            </div>
        </div>
    )
}

export default OrderDetails
