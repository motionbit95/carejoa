import {
  Box,
  Center,
  Container,
  HStack,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsStars } from "react-icons/bs";

export const Service2 = () => (
  <Container py={{ base: "16", md: "24" }}>
    <Stack gap={16} padding={{ base: "4" }}>
      <Stack align="center" gap={16}>
        <Icon
          boxSize={{ base: "10", md: "12" }}
          as={BsStars}
          color={"green.400"}
        />
        <Heading size={{ base: "sm", md: "md" }} fontWeight={"extrabold"}>
          케어조아는 이러한 서비스를 제공합니다.
        </Heading>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "4", md: "6" }}>
        <Stack
          bgColor={"#0C0228"}
          spacing={{ base: "4", md: "6" }}
          color={"white"}
          padding={{ base: "4", md: "6" }}
          borderRadius={"2xl"}
        >
          <Heading size={{ base: "sm", md: "sm" }}>빠른 상담 서비스</Heading>
          <Text opacity={0.5} fontSize={{ base: "lg", md: "md" }}>
            빠른상담서비스 밑에 현재 "관리조아는"을 케어조아는 요양케어 시설 및
            서비스 제공자와 고객의 실시간 견적&상담 서비스를 제공합니다.
          </Text>
          {/* <Box>지도</Box> */}
          <Box position={"relative"} py={{ base: "4", md: "8" }}>
            <Center>
              <Image src={require("../../asset/map.png")} w={"50%"} />
            </Center>
            <Image
              src={require("../../asset/example.png")}
              w={"50%"}
              position={"absolute"}
              right={0}
              bottom={0}
            />
          </Box>
        </Stack>
        <Stack gap={{ base: "4", md: "6" }}>
          <Stack
            bgColor={"blue.100"}
            spacing={{ base: "4", md: "6" }}
            padding={{ base: "4", md: "6" }}
            borderRadius={"2xl"}
            height={"full"}
          >
            <Heading fontWeight={"extrabold"} size={{ base: "sm", md: "sm" }}>
              전문 요양시설 및 특화된 요양시설을 발굴하고 추천합니다.
            </Heading>
            <Text opacity={0.5}>
              지역과 재활 등 특화 영역 뿐 아니라, 등급과 크기 등 중요한 조건에
              맞는 요양시설을 추천해드려요.
            </Text>
            <HStack justifyContent={"flex-end"}>
              {/* <Icon boxSize={{ base: "10", md: "12" }} as={BsStars} /> */}
              <Image src={require("../../asset/image2.png")} w={"100px"} />
            </HStack>
          </Stack>
          <Stack
            bgColor={"blue.100"}
            spacing={{ base: "4", md: "6" }}
            padding={{ base: "4", md: "6" }}
            borderRadius={"2xl"}
            height={"full"}
          >
            <Heading fontWeight={"extrabold"} size={{ base: "sm", md: "sm" }}>
              실시간 상담 및 견적
            </Heading>
            <Text opacity={0.5}>
              케어조아는 실시간 견적 및 상담을 통해 희망지역 요양시설 들의
              다양한 정보 를 제공 받고 합리적인 선택을 돕습니다.
            </Text>
            <HStack justifyContent={"flex-end"}>
              {/* <Icon boxSize={{ base: "10", md: "12" }} as={BsStars} /> */}
              <Image src={require("../../asset/image3.png")} w={"100px"} />
            </HStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Stack>
  </Container>
);
