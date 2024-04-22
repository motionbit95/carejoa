import { Box, Container, Text } from "@chakra-ui/react";
import { RadioCard, RadioCardGroup } from "./RadioCardGroup";
import { shelters } from "../../Page/Dashboard/data";

export const RadioCardGroupContainer = () => {
  return (
    <Box as="section" bg="bg.surface" py={{ base: "4", md: "8" }}>
      <Container>
        <RadioCardGroup spacing="3">
          {shelters.map((shelter, id) => (
            <RadioCard key={id} value={shelter.title}>
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
