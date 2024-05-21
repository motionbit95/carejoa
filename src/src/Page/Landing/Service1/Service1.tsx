import {
  Box,
  Container,
  HStack,
  Heading,
  Icon,
  Image,
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
          현재 케어조아는 일반회원과 병원회원을 <br /> 전국의 모든 요양시설과
          서비스 제공 업체와 상담 시스템을 구축하고 있습니다.
        </Text>
      </Stack>
      <Stack alignItems={"center"}>
        <SimpleGrid
          // display={{ base: "none", md: "grid" }}
          columns={{ base: 2, lg: 4 }}
          columnGap={{ base: 10, md: 16 }}
          rowGap={{ base: 10, md: 16 }}
        >
          {buttonItems.map((item, index) => (
            <Stack key={item.name} spacing={{ base: "4", md: "5" }}>
              <Square
                size={{ base: "36", md: "36" }}
                // bg="accent"
                // color="fg.inverted"
                bgColor={item.color}
                borderRadius="lg"
                flexDirection="column"
                justifyContent={"space-between"}
                alignItems={"flex-start"}
              >
                <Box padding={{ base: "2", md: "3" }}>
                  <Text
                    whiteSpace={"pre-wrap"}
                    color="white"
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
                  color={"white"}
                />
              </Square>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  </Container>
);
