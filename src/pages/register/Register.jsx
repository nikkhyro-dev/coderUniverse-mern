import React, { useState } from "react";
// import Card from "../../compontents/shared/card/Card";
// import styles from "./register.module.css";
import StepAvatar from "../steps/stepAvatar/StepAvatar";
import StepPhoneEmail from "../steps/stepPhoneEmail/StepPhoneEmail";
import StepName from "../steps/stepName/StepName";
import StepOTP from "../steps/stepOTP/StepOTP";
import StepUsername from "../steps/stepUsername/StepUsername";



const steps = {
  1: StepPhoneEmail,
  2: StepOTP,
  3: StepName,
  4: StepAvatar,
  5: StepUsername,
};
function Register() {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  const onNext = ()=>{
    setStep(step+1)
  }

  return (
    <div>
      <Step onNext={onNext}  />
    </div>
  );
}

export default Register;
