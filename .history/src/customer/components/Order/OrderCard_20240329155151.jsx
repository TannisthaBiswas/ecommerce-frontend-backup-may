import { Box, Grid } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AdjustIcon from '@mui/icons-material/Adjust';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderCard = () => {
    return (
        <div>
            <Box className="p-5 shadow-lg hover:shadow-2xl border mr-10 ">
                <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div
                            className="flex cursor-pointer"
                        >
                            <img
                                className="w-[5rem] h-[5rem] object-cover object-top"
                                src="https://n.nordstrommedia.com/id/sr3/d09f18de-4381-4582-9a85-a62a2d8a2563.jpeg?h=365&w=240&dpr=2"
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


                    <Grid item xs={4}>
                        {true && <p className="space-y-2 font-semibold">


                            <FiberManualRecordIcon
                                sx={{ width: "15px", height: "15px" }}
                                className="text-green-600 p-0 mr-2 text-sm"
                            />
                            <span>Delivered On Apr 04</span>
                        </p>}


                        {true && <p className="space-y-2 font-semibold">

                            <AdjustIcon
                                sx={{ width: "15px", height: "15px" }}
                                className="text-green-600 p-0 mr-2 text-sm"
                            />
                            <span>Expected Delivery On Apr 12</span>
                        </p>}
                        <p className="text-xs">Your Item Has Been Delivered</p>
                        {true && (
                            <div
                                
                                className="flex items-center text-blue-600 cursor-pointer"
                            >
                                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
                                <span>Rate & Review Product</span>
                            </div>
                        )}
                    </Grid>


                </Grid>
            </Box>
        </div>
    )
}

export default OrderCard
