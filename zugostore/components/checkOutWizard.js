import { Step, StepLabel, Stepper } from "@material-ui/core";
import React from "react";

export default function CheckOutWizard({ activeStep = 0 }) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {["Login", "Shipping Addres", "Payment Method", "Place Order"].map(
        (step) => (
          <Step key={step}>
            <StepLabel> {step}</StepLabel>
          </Step>
        )
      )}
    </Stepper>
  );
}
