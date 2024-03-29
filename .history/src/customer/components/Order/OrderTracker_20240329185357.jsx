import { Stepper } from '@mui/material'
import React from 'react'


const steps = [
    "Order Placed",
    'Order Confirmed',
    'Shipped',
    'Out For Delivery',
    'Delivered'
  ];


const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper  activeStep={activeStep} alternativeLabel>

        </Stepper>
    </div>
  )
}

export default OrderTracker
