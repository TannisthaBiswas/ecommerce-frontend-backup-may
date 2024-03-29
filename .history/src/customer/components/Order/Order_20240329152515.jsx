import React from 'react'


const orderStatus = [
    { label: "Placed", value: "placed" },
    {label: "Shipped", value: "shipped" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", vlue: "returned" },
  ];

const Order = () => {
  return (
    <div>
      <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
      <Grid item xs={2.5} className="">
      <div className="h-auto shadow-lg bg-white border p-5 sticky top-5">
      <h1 className="font-bold text-lg">Filters</h1>
      <div className="space-y-4 mt-10">
      <h1 className="font-semibold">Order Status</h1>
              
      </div>
      </div>

      </Grid>



      <Grid item xs={9}>

        </Grid>
      </Grid>
    </div>
  )
}

export default Order
