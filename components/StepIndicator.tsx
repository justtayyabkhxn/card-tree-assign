import React from "react";

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps = ["About", "Contact info", "Template + AI"];

  return (
    <div className="flex items-center justify-center w-full mb-6">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          {/* Step Circle + Text Below */}
          <div className="flex flex-col items-center mr-8">
            {/* Step Number Circle (Smaller) */}
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full text-white text-xs font-bold
                        ${index + 1 === currentStep ? "bg-blue-500" : "bg-gray-300"}`}
            >
              {index + 1}
            </div>

            {/* Step Label (Custom Styling for "Template + AI") */}
            <p className="text-gray-600 text-xs mt-1">
              {step.includes("AI") ? (
                <>
                  Template + <span className="text-orange-500 font-semibold">AI</span>
                </>
              ) : (
                step
              )}
            </p>
          </div>

          {/* Bigger Arrow (Not for last step) */}
          {index < steps.length - 1 && <span className="mx-2 text-gray-500 text-2xl">›</span>}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
