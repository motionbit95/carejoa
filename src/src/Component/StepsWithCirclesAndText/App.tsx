import { Box, Container, Stack } from "@chakra-ui/react";
import { Step } from "./Step";
import { steps } from "./data";
import { useStep } from "./useStep";

export const StepsWithCirclesAndText = () => {
  const [currentStep, { setStep }] = useStep({
    maxStep: steps.length,
    initialStep: 2,
  });
  return (
    <Box bg="bg.surface">
      <Stack spacing="0" direction={{ base: "column", md: "row" }}>
        {steps.map((step, id) => (
          <Step
            key={id}
            cursor="pointer"
            onClick={() => setStep(id)}
            title={step.title}
            isActive={currentStep === id}
            isCompleted={currentStep > id}
            isFirstStep={id === 0}
            isLastStep={steps.length === id + 1}
          />
        ))}
      </Stack>
    </Box>
  );
};
