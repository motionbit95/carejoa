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
import { buttonItems } from "./data";

export const Service1 = () => (
  <Container py={{ base: "16", md: "24" }}>
    <Stack spacing={{ base: "8", md: "12" }} padding={{ base: "4" }}>
      <Stack
        spacing={{ base: "4", md: "6" }}
        align={{ base: "start", md: "start" }}
      >
        <Heading size={{ base: "sm", md: "md" }} fontWeight={"extrabold"}>
          케어조아는 전국 서비스이며
          <br />
          빠르게 확장하고 있어요
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted">
          현재 케어조아는 일반 회원과 병원 회원으로 운영되고 있으며,
          <br /> 위치 기반 가까운 환자와 병원을 매칭 시켜드리고 있어요!
        </Text>
      </Stack>
      <Stack alignItems={"center"}>
        <SimpleGrid
          display={{ base: "none", md: "grid" }}
          columns={{ base: 1, md: 2, lg: 4 }}
          columnGap={10}
          rowGap={{ base: 10, md: 16 }}
        >
          {buttonItems.map((item) => (
            <Stack key={item.name} spacing={{ base: "4", md: "5" }}>
              <Square
                size={{ base: "40", md: "36" }}
                bg="accent"
                color="fg.inverted"
                borderRadius="lg"
                flexDirection="column"
                justifyContent={"space-between"}
              >
                <Box padding={{ base: "2", md: "3" }}>
                  <Text
                    textAlign={"start"}
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight="medium"
                  >
                    {item.name}
                  </Text>
                </Box>
                <Icon
                  m={3}
                  alignSelf="flex-end"
                  as={item.icon}
                  boxSize={{ base: "10", md: "12" }}
                />
              </Square>
            </Stack>
          ))}
        </SimpleGrid>
        <Stack
          bgColor={"white"}
          p={6}
          borderRadius={"2xl"}
          display={{ base: "grid", md: "none" }}
        >
          <SimpleGrid
            columns={{ base: 2, md: 2, lg: 4 }}
            columnGap={10}
            rowGap={{ base: 10, md: 16 }}
          >
            {buttonItems.map((item) => (
              <Stack key={item.name} spacing={{ base: "4", md: "5" }}>
                <Square
                  size={{ base: "40", md: "36" }}
                  bg="accent"
                  color="fg.inverted"
                  borderRadius="lg"
                  flexDirection="column"
                  justifyContent={"space-between"}
                >
                  <Box padding={{ base: "2", md: "3" }}>
                    <Text
                      textAlign={"start"}
                      fontSize={{ base: "sm", md: "md" }}
                      fontWeight="medium"
                    >
                      {item.name}
                    </Text>
                  </Box>
                  <Icon
                    m={3}
                    alignSelf="flex-end"
                    as={item.icon}
                    boxSize={{ base: "10", md: "12" }}
                  />
                </Square>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Stack>
  </Container>
);
