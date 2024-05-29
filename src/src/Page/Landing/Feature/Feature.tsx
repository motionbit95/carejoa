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
              // size={{ base: "xs", md: "sm" }}
              fontSize={{ base: "30px", md: "36px" }}
              lineHeight={"1.2"}
              fontWeight="extrabold"
              flexDirection={{ base: "column", md: "row" }}
              display={"flex"}
              gap={2}
              whiteSpace={{ base: "pre-line", sm: "normal" }}
            >
              <Text>
                {`내 집처럼 편안한 곳,
                  내 가족처럼 
                  믿을수 있는 곳,
                  케어조아에서 
                  찾아보세요~`}
              </Text>
            </Heading>
          </Stack>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          columnGap={20}
          rowGap={{ base: 10, md: 16 }}
        >
          {services.map((service) => (
            <Stack
              cursor={"pointer"}
              key={service.name}
              spacing={{ base: "4", md: "5" }}
              onClick={() => window.open("https://cafe.naver.com/pinkqy5cg")}
            >
              <Square
                size={{ base: "10", md: "12" }}
                bgColor={"bg.surface"}
                // bg="accent"
                // color="fg.inverted"
                borderRadius="lg"
              >
                <Icon
                  as={service.icon}
                  color={service.color}
                  boxSize={{ base: "6", md: "8" }}
                />
              </Square>
              <Stack spacing={{ base: "1", md: "2" }} flex="1">
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
                  {service.name}
                </Text>
                <Text opacity={0.5}>{service.description}</Text>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
);
