import React from 'react'

const Checkout = () => {
  return (
    <div>
      Checkout
      <div>
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
      </div>
    </div>
  )
}

export default Checkout
