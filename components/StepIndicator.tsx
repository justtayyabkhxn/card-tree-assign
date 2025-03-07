import React from "react";

interface StepIndicatorProps {
  currentStep: number;
  previousStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, previousStep }) => {
  const steps = ["About", "Contact info", "Template + AI"];

  return (
    <div className="flex items-center justify-center w-full mb-6">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center mr-8">
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full text-white text-xs font-bold
                ${index + 1 === currentStep || index + 1 === previousStep ? "bg-blue-500" : "bg-gray-300"}`}
            >
              {index + 1}
            </div>

            <p className={`text-xs mt-1 ${index + 1 === currentStep || index + 1 === previousStep ? "text-blue-500 font-semibold" : "text-gray-600"}`}>
              {step.includes("AI") ? (
                <>
                  Template + <span className="text-orange-500 font-semibold">AI</span>
                </>
              ) : (
                step
              )}
            </p>
          </div>

          {index < steps.length - 1 && <span className="mx-2 text-gray-500 text-2xl">›</span>}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
