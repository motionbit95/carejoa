import { Box, Container, Stack } from "@chakra-ui/react";
import { RadioButton, RadioButtonGroup } from "./RadioButtonGroup";

export const RadioButtonGroupContainer = () => (
  <Box as="section" bg="bg.surface" py={{ base: "4", md: "8" }}>
    <Container maxW="lg">
      <Stack spacing="5">
        {["lg"].map((size) => (
          <RadioButtonGroup key={size} size={size}>
            <RadioButton value="1">A등급</RadioButton>
            <RadioButton value="2">B등급</RadioButton>
            <RadioButton value="3">C등급</RadioButton>
            <RadioButton value="4">D등급</RadioButton>
            <RadioButton value="5">E등급</RadioButton>
            <RadioButton value="6">상관없음</RadioButton>
          </RadioButtonGroup>
        ))}
      </Stack>
    </Container>
  </Box>
);
