import {
  Box,
  Container,
  Heading,
  Icon,
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
          케어조아는 이런 서비스를 제공해요!
        </Heading>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
        <Stack
          bgColor={"black"}
          spacing={{ base: "4", md: "6" }}
          color={"white"}
          padding={{ base: "4", md: "6" }}
          borderRadius={"2xl"}
        >
          <Heading size={{ base: "sm", md: "sm" }}>빠른 상담 서비스</Heading>
          <Text fontSize={{ base: "lg", md: "md" }}>
            현재 케어조아는 개인, 병원 회원으로 운영되고 있으며, 위치 기반
            가까운 회원과 병원을 매칭해드리고 있어요!
          </Text>
          <Box>지도</Box>
        </Stack>
        <Stack>
          <Stack
            bgColor={"blue.100"}
            spacing={{ base: "4", md: "6" }}
            padding={{ base: "4", md: "6" }}
            borderRadius={"2xl"}
          >
            <Heading size={{ base: "sm", md: "sm" }}>요양 시설 추천</Heading>
            <Text>
              지역과 재활 등 특화 영역 뿐 아니라, 등급과 크기 등 중요한 조건에
              맞는 요양시설을 추천해드려요.
            </Text>
            <Icon boxSize={{ base: "10", md: "12" }} as={BsStars} />
          </Stack>
          <Stack
            bgColor={"blue.100"}
            spacing={{ base: "4", md: "6" }}
            padding={{ base: "4", md: "6" }}
            borderRadius={"2xl"}
          >
            <Heading size={{ base: "sm", md: "sm" }}>
              100% 무료 상담 보장
            </Heading>
            <Text>
              케어조아는 100% 무료 상담을 보장합니다. 상담 신청이 완료되면,
              이후의 모든 프로세스는 센터에게 안심하고 맡겨주세요.
            </Text>
            <Icon boxSize={{ base: "10", md: "12" }} as={BsStars} />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Stack>
  </Container>
);
