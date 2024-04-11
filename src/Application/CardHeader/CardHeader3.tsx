import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";

export const CardHeader3 = () => (
  <Box as="section" pt={{ base: "4", md: "8" }} pb={{ base: "12", md: "24" }}>
    <Container>
      <Box
        bg="bg.surface"
        px={{ base: "4", md: "6" }}
        py="5"
        boxShadow="sm"
        borderRadius="lg"
      >
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing="4"
          justify="space-between"
        >
          <Stack spacing="1">
            <Text textStyle="lg" fontWeight="medium">
              Updates Available
            </Text>
            <Text textStyle="sm" color="fg.muted">
              A new version is available. Please upgrade for the best
              experience.
            </Text>
          </Stack>
          <Button>Download</Button>
        </Stack>
      </Box>
    </Container>
  </Box>
);
