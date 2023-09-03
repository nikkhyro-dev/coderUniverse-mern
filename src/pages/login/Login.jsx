import React, { useState } from 'react'
import styles from "./login.module.css";
import StepOTP from "../steps/stepOTP/StepOTP";
import StepPhoneEmail from "../steps/stepPhoneEmail/StepPhoneEmail";

const steps = {
    1: StepPhoneEmail,
    2: StepOTP,
  };

function Login() {
    const [step, setStep] = useState(1);
    const Step = steps[step];
  
    const onNext = ()=>{
      setStep(step+1)
    }

  return (
    <div>
     <Step onNext={onNext}  />
    </div>
  )
}

export default Login