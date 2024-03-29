import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeliveryAddressForm from "./AddAddress";
import { useLocation, useNavigate } from "react-router-dom";
import OrderSummary from "./OrderSummary.jsx";

const steps = [
    "Login",
    "Delivery Address",
    "Order Summary",
    "Payment",
];

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);
  //  const location = useLocation();
   // const queryParams = new URLSearchParams(location.search);
    
   // const step = queryParams.get("step");
  //const navigate=useNavigate();






// Get the current URL
const currentUrl = new URL(window.location.href);

// Get the existing search parameters
const searchParams = new URLSearchParams(currentUrl.search);

// Set the value of the 'step' query parameter
searchParams.set('step', '1'); // '2' is the value you want to assign

// Update the search property of the URL with the modified search parameters
currentUrl.search = searchParams.toString();

// Now you can use the updated URL
console.log(currentUrl.href); // Output the updated URL







 
//console.log("location",location)
//console.log("step",step)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
       
            <Box className="px-5 lg:px-32 " sx={{ width: '100%' }}>
                 <Stepper activeStep={step}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};


                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />


                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                        
          <div >
            {activeStep == 1? <DeliveryAddressForm />:<OrderSummary/>}
          </div>
                    </React.Fragment>
                )}
            </Box>
        

    );
}