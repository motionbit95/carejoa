import { Box, Container, SimpleGrid, Stack } from "@chakra-ui/react";
import { RadioButton, RadioButtonGroup } from "./RadioButtonGroup";

export const RadioButtonGroupContainer = ({ ...props }) => (
  <Box as="section" bg="bg.surface" py={{ base: "4", md: "8" }} {...props}>
    {/* <Container> */}
    <SimpleGrid spacing="5">
      {["lg"].map((size) => (
        <RadioButtonGroup w={"full"} key={size} size={size}>
          {props.list?.map((item: string) => (
            <RadioButton flex={1} key={item} value={item}>
              {item}
            </RadioButton>
          ))}
          {/* <RadioButton value="1">A등급</RadioButton>
            <RadioButton value="2">B등급</RadioButton>
            <RadioButton value="3">C등급</RadioButton>
            <RadioButton value="4">D등급</RadioButton>
            <RadioButton value="5">E등급</RadioButton>
            <RadioButton value="6">상관없음</RadioButton> */}
        </RadioButtonGroup>
      ))}
    </SimpleGrid>
    {/* </Container> */}
  </Box>
);
