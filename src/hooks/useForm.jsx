import { useState } from "react";

export function useForm(steps) {
  const [currentStep, setCurentStep] = useState(0);

  function changeStep(i, e) {
    e ? e.preventDefault() : null;

    if (i < 0 || i >= steps.length) return;
    setCurentStep(i);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFistStep: currentStep === 0 ? true : false,
  };
}
