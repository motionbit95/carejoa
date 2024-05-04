import { Box, Container, Text } from "@chakra-ui/react";
import { RadioCard, RadioCardGroup } from "./RadioCardGroup";
import { shelters } from "../../Page/Dashboard/data";
import React from "react";

export const RadioCardGroupContainer = ({ ...props }) => {
  const { defaultValue } = props;
  return (
    <Box as="section" py={{ base: "4", md: "8" }}>
      <Container>
        <RadioCardGroup spacing="3" value={defaultValue}>
          {shelters.map((shelter, id) => (
            <RadioCard
              key={id}
              value={shelter.title}
              onClick={() => props.onChange(shelter.title)}
            >
              <Text color="fg.emphasized" fontWeight="medium" fontSize="lg">
                {shelter.title}
              </Text>
              <Text color="fg.muted" textStyle="sm">
                {shelter.detail}
              </Text>
            </RadioCard>
          ))}
        </RadioCardGroup>
      </Container>
    </Box>
  );
};
