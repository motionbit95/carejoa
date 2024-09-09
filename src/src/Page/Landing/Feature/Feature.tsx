import {
  Box,
  Container,
  HStack,
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
      <Stack spacing={{ base: "12", md: "16" }} align={"start"}>
        <Stack>
          <Stack spacing="3">
            <Text
              fontSize={{ base: "xl", md: "36px" }}
              fontWeight={"extrabold"}
            >
              어디로 모셔야 할까요?
            </Text>
            <Text
              whiteSpace={{ base: "pre-line", md: "normal" }}
              fontSize={{ base: "sm", md: "md" }}
            >
              {`내 집처럼 편안한 곳, 
              내 가족처럼 믿을수 있는 곳, 
              케어조아에서 찾아보세요.`}
            </Text>
          </Stack>
        </Stack>
        <Container p={{ base: "0", md: "4" }} maxW={"container.sm"}>
          <Stack
            align={"center"}
            justify={"center"}
            p={"30px"}
            bg={"linear-gradient(to right, #FFE875, #FFD24F)"}
            borderRadius={"lg"}
          >
            <HStack
              borderRadius={"lg"}
              p={"10px"}
              bgColor={"white"}
              align={"center"}
              justify={"center"}
            >
              {services.map((service) => (
                <Stack align={"center"} w={{ base: "60px", md: "100px" }}>
                  <Square
                    size={{ base: "9", md: "12" }}
                    // bgColor={"bg.surface"}
                    bg={service.bgcolor}
                    // color="fg.inverted"
                    borderRadius="xl"
                  >
                    <Icon
                      as={service.icon}
                      color={service.color}
                      boxSize={{ base: "5", md: "8" }}
                    />
                  </Square>
                  <Text fontSize={{ base: "xs", md: "md" }}>
                    {service.name}
                  </Text>
                </Stack>
              ))}
            </HStack>
          </Stack>
        </Container>
        {/* <SimpleGrid
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
        </SimpleGrid> */}
      </Stack>
    </Container>
  </Box>
);
