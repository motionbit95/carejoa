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
        </RadioButtonGroup>
      ))}
    </SimpleGrid>
    {/* </Container> */}
  </Box>
);
