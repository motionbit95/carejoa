import {
  BoxProps,
  Divider,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { StepCircle } from "./StepCircle";

interface StepProps extends BoxProps {
  title: string;
  isCompleted: boolean;
  isActive: boolean;
  isLastStep: boolean;
  isFirstStep: boolean;
}

export const Step = (props: StepProps) => {
  const {
    isActive,
    isCompleted,
    isLastStep,
    isFirstStep,
    title,
    ...stackProps
  } = props;
  const isMobile = useBreakpointValue({ base: true, md: false });

  const orientation = useBreakpointValue<"horizontal" | "vertical">({
    base: "vertical",
    md: "horizontal",
  });

  return (
    <Stack spacing="3" direction={"column"} flex="1" {...stackProps}>
      <Stack spacing="0" align="center" direction={"row"}>
        <Divider
          // display={isMobile ? "none" : "initial"}
          borderWidth="1px"
          borderColor={
            isFirstStep
              ? "transparent"
              : isCompleted || isActive
              ? "accent"
              : "inherit"
          }
        />
        <StepCircle isActive={isActive} isCompleted={isCompleted} />
        <Divider
          // orientation={orientation}
          borderWidth="1px"
          borderColor={
            isCompleted ? "accent" : isLastStep ? "transparent" : "inherit"
          }
        />
      </Stack>
      <Stack
        spacing="0.5"
        // pb={isMobile && !isLastStep ? "8" : "0"}
        align={"center"}
      >
        <Text fontSize={{ base: "11px", sm: "sm", md: "md" }}>{title}</Text>
      </Stack>
    </Stack>
  );
};
