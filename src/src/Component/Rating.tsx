import { HStack, Icon, StackProps } from "@chakra-ui/react";
import { BsFillStarFill } from "react-icons/bs";

export const Rating = (props: StackProps) => (
  <HStack spacing="1.5" {...props}>
    {Array.from({ length: 5 })
      .map((_, index) => index + 1)
      .map((index) => (
        <Icon
          key={index}
          as={BsFillStarFill}
          fontSize="3xl"
          color="#47E17A"
          _dark={{ color: "blue.200" }}
        />
      ))}
  </HStack>
);
