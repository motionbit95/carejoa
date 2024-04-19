import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import { services } from "./data";

export const Feature = () => (
  <Box as="section">
    <Container py={{ base: "16", md: "24" }}>
      <Stack
        spacing={{ base: "12", md: "16" }}
        align={{ base: "start", md: "center" }}
        padding={{ base: "4" }}
      >
        <Stack alignSelf={"stretch"}>
          <Stack spacing="3" align={"center"}>
            <Text color="fg.muted" fontSize={{ base: "lg", md: "xl" }}>
              어디로 모셔야 할까요?
            </Text>
            <Heading
              size={{ base: "sm", md: "md" }}
              fontWeight="extrabold"
              flexDirection={{ base: "column", md: "row" }}
              display={"flex"}
              gap={2}
            >
              <Text>어르신의 상황에 맞게,</Text>{" "}
              <Text>케어조아가 찾아드려요.</Text>
            </Heading>
          </Stack>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          columnGap={20}
          rowGap={{ base: 10, md: 16 }}
        >
          {services.map((service) => (
            <Stack key={service.name} spacing={{ base: "4", md: "5" }}>
              <Square
                size={{ base: "10", md: "12" }}
                bg="accent"
                color="fg.inverted"
                borderRadius="lg"
              >
                <Icon as={service.icon} boxSize={{ base: "5", md: "6" }} />
              </Square>
              <Stack spacing={{ base: "1", md: "2" }} flex="1">
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
                  {service.name}
                </Text>
                <Text color="fg.muted">{service.description}</Text>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
);
