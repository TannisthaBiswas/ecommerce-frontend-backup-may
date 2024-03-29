import { Box, Grid } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <div>
       <Box className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src=""
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">product title</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: XS</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹2000</p>
        </Grid>
        
      </Grid>
    </Box>
    </div>
  )
}

export default OrderCard
