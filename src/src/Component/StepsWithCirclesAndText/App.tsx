import { Box, Container, Stack } from "@chakra-ui/react";
import { Step } from "./Step";

export const StepsWithCirclesAndText = ({ ...props }) => {
  const { currentStep } = props;
  return (
    <Box bg="bg.surface">
      <Stack spacing="0" direction={"row"} py={{ base: "4", md: "8" }}>
        {props.title.map((item: string, id: number) => (
          <Step
            key={id}
            cursor="pointer"
            // onClick={() => setStep(id)}
            title={item}
            isActive={currentStep - 1 === id}
            isCompleted={currentStep - 1 > id}
            isFirstStep={id === 0}
            isLastStep={props.title.length === id + 1}
          />
        ))}
      </Stack>
    </Box>
  );
};
