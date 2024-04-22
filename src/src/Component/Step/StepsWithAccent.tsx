import { Box, Container, Stack } from "@chakra-ui/react";
import { Step } from "./Step";
import { steps } from "../../Page/Dashboard/data";

export const StepsWithAccent = (props: any) => {
  const { currentStep } = props;
  return (
    <Box bg="bg.surface">
      <Container py={{ base: "8", md: "16" }}>
        <Stack direction={{ base: "column", md: "row" }} spacing="4">
          {steps.map((step, id) => (
            <Step
              key={id}
              cursor="pointer"
              // onClick={() => setStep(id)}
              title={step.title}
              description={step.description}
              isActive={currentStep - 1 === id}
              isCompleted={currentStep - 1 > id}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
