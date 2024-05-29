import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CTA = () => (
  <Box as="section" bg="bg.surface">
    <Container py={{ base: "8", md: "12" }}>
      <Stack spacing={{ base: "4", md: "5" }} padding={{ base: "4" }}>
        <Stack spacing={{ base: "2", md: "4" }}>
          <Text
            color="fg.muted"
            fontSize={{ base: "md", md: "lg" }}
            whiteSpace={{ base: "normal", sm: "pre-line" }}
          >
            {`내 집처럼 편안하고 내가족처럼 밑고 맡길수 있는곳, 
            케어조아는 오늘도 우리 부모님이 노후를 편안하게 보내실수 있도록 노력하겠습니다.`}
          </Text>
          <Heading size={{ base: "sm", md: "md" }} fontWeight="extrabold">
            요양시설 및 요양서비스 찾기는 케어조아와 함께하세요
          </Heading>
        </Stack>
        <Link to="/login">
          <Button size="xl">무료 상담하기</Button>
        </Link>
      </Stack>
    </Container>
  </Box>
);
