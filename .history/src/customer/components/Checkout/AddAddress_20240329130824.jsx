import { Button, Grid } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAddressForm = () => {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
                    <div className="p-5 py-7 border-b cursor-pointer">
<AddressCard/>
<Button>Deliver Here</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm
