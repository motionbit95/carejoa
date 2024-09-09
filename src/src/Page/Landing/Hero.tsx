import {
  AspectRatio,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
export const Hero = () => {
  const navigate = useNavigate();
  return (
    <Container py={{ base: "16", md: "24" }}>
      <Stack spacing={8}>
        <Stack spacing={{ base: "8", md: "12" }} justifyContent="center">
          <Stack spacing={{ base: "4", md: "6" }} align={"center"}>
            <Text
              // size={{ base: "md", md: "lg" }}
              fontSize={{ base: "20px", md: "36px" }}
              fontWeight={"extrabold"}
              whiteSpace={"pre-line"}
              lineHeight={"1.2"}
            >
              {"여기저기 요양시설 찾아보느라 힘드셨죠?"}
              <br />
              {/* 케어조아가 찾아드릴께요! */}
            </Text>
            <Text fontSize={{ base: "md", md: "md" }} color="fg.muted">
              케어조아는 상담지만 작성하면 끄~읏
            </Text>
          </Stack>
        </Stack>
        <HStack justify={"center"} spacing={{ base: "2", md: "4" }}>
          <Stack align={"center"}>
            <Text fontWeight={"bold"} fontSize={{ base: "lg", md: "xl" }}>
              간단한 상담지 작성
            </Text>
            <Text fontSize={{ base: "11px", md: "md" }}>
              고객 정보를 작성하고 상담을 신청합니다.
            </Text>
          </Stack>
          <Box boxSize={{ base: "80px", md: "100px" }}>
            <Image src={require("../../asset/touch-screen.png")} />
          </Box>
        </HStack>
        <HStack justify={"center"} spacing={{ base: "2", md: "4" }}>
          <Box boxSize={{ base: "80px", md: "100px" }}>
            <Image src={require("../../asset/mentorship.png")} />
          </Box>
          <Stack align={"center"}>
            <Text fontWeight={"bold"} fontSize={{ base: "lg", md: "xl" }}>
              상담 견적서 도착
            </Text>
            <Text
              whiteSpace={"pre-line"}
              textAlign={"center"}
              fontSize={{ base: "11px", md: "md" }}
            >{`내가 희망하는 지역의 요양시설에서\n시설 정보와 간단한 견적을 받아보실 수 있습니다.`}</Text>
          </Stack>
        </HStack>
        {/* <AspectRatio ratio={2}>
        <Image
          borderRadius={"2xl"}
          objectFit="cover"
          src={require("../../asset/image1.png")}
          // alt="Lady at work"
        />
      </AspectRatio> */}
        <Container maxW={"container.sm"}>
          <Stack align={"center"}>
            <Stack
              className="eye-catching-button"
              w={"100%"}
              fontWeight={"bold"}
              borderRadius={{ base: "xl", md: "2xl" }}
              cursor={"pointer"}
              align={"center"}
              onClick={() => navigate("/login")}
            >
              <Text>무료 상담하기</Text>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
};
