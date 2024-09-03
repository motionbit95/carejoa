import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CTA = () => (
  <Box as="section" bg="bg.accent.default">
    <Container py={{ base: "8", md: "12" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack spacing={{ base: "2", md: "4" }} whiteSpace={"pre-line"}>
          <Text
            textAlign={"center"}
            color="white"
            fontSize={{ base: "13px", md: "lg" }}
          >
            {`내 집처럼 편안하고 내가족처럼 밑고 맡길수 있는곳, 
            케어조아는 오늘도 우리 부모님이 노후를 편안하게 보내실수 있도록 노력하겠습니다.`}
          </Text>
          <Heading
            size={{ base: "sm", md: "md" }}
            textAlign={"center"}
            fontWeight="extrabold"
            color={"white"}
            whiteSpace={"pre-line"}
          >
            {`요양시설 및 요양서비스 찾기는 
            케어조아와 함께하세요`}
          </Heading>
        </Stack>
        <Link to="/login">
          <Stack
            className="eye-catching-button"
            fontWeight={"bold"}
            textAlign={"center"}
          >
            <Text>무료 상담하기</Text>
          </Stack>
        </Link>
      </Stack>
    </Container>
  </Box>
);
