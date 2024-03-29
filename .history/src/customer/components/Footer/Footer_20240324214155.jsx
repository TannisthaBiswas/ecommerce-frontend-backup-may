import { Button } from '@mui/base'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid classname='bg-black text-white text-center mt-10'
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant="h6">About Us</Typography>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant="h6">About Us</Typography>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant="h6">About Us</Typography>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant="h6">About Us</Typography>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Company</Button></div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
