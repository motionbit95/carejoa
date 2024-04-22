import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CTA = () => (
  <Box as="section" bg="bg.surface">
    <Container py={{ base: "8", md: "12" }}>
      <Stack spacing={{ base: "4", md: "5" }} padding={{ base: "4" }}>
        <Stack spacing={{ base: "2", md: "4" }}>
          <Text color="fg.muted" maxW="2xl" fontSize="xl">
            신뢰할 수 있는 요양병원 상담서비스
          </Text>
          <Heading size={{ base: "sm", md: "md" }} fontWeight="extrabold">
            케어조아와 함께하세요.
          </Heading>
        </Stack>
        <Link to="/login">
          <Button size="xl">무료 상담하기</Button>
        </Link>
      </Stack>
    </Container>
  </Box>
);
