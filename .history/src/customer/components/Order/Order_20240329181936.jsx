import { Box, Grid } from '@mui/material';
import React from 'react'
import OrderCard from './OrderCard';


const orderStatus = [
    { label: "Placed", value: "placed" },
    {label: "Shipped", value: "shipped" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
  ];

const Order = () => {
  return (
    <Box className="px-5">
      <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
      <Grid item xs={2.5} className="">
      <div className="h-auto shadow-lg bg-white border p-5 sticky top-5 ml-10">
      <h1 className="font-bold text-lg">Filters</h1>
      <div className="space-y-4 mt-10">
      <h1 className="font-semibold">Order Status</h1>
      {orderStatus.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}     
      </div>
      </div>

      </Grid>



      <Grid item xs={9}>
      <Box className="space-y-5 ">
            
             <OrderCard/>
            
          </Box>

        </Grid>
      </Grid>
    </Box>
  )
}

export default Order
