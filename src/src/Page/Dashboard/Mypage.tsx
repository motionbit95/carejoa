import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const Mypage = () => {
  const navigate = useNavigate();
  return (
    <Box as="section">
      <Container py={{ base: "4", md: "8" }} h={"100vh"}>
        <Stack
          borderRadius={"2xl"}
          shadow={"sm"}
          w={"50%"}
          spacing={6}
          bgColor={"gray.50"}
          h={"100%"}
        >
          <Stack
            spacing={6}
            p={{ base: "4", md: "6" }}
            bgColor={"white"}
            borderTopRadius={"2xl"}
          >
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              내정보 관리
            </Text>
            <Divider />
            <Stack spacing={7}>
              <HStack justify={"space-between"}>
                <Text fontSize={{ base: "lg", md: "xl" }}>이름</Text>
                <Text fontSize={{ base: "lg", md: "xl" }}>OOO</Text>
              </HStack>
              <HStack justify={"space-between"}>
                <Text fontSize={{ base: "lg", md: "xl" }}>연락처</Text>
                <HStack spacing={0}>
                  <Text fontSize={{ base: "lg", md: "xl" }}>000-0000-0000</Text>
                  <Icon as={BiChevronRight} boxSize={7} />
                </HStack>
              </HStack>
              <HStack justify={"space-between"}>
                <Text fontSize={{ base: "lg", md: "xl" }}>비밀번호</Text>
                <HStack spacing={0}>
                  <Text fontSize={{ base: "lg", md: "xl" }}>변경하기</Text>
                  <Icon as={BiChevronRight} boxSize={7} />
                </HStack>
              </HStack>
              <HStack justify={"space-between"}>
                <Text fontSize={{ base: "lg", md: "xl" }}>이메일</Text>
                <Text fontSize={{ base: "lg", md: "xl" }}>
                  test@example.com
                </Text>
              </HStack>
              <Button
                bgColor="gray.100"
                color={"fg.onGray"}
                size={"lg"}
                gap={2}
                onClick={() => {
                  navigate("/login");
                }}
              >
                <Icon as={FiLogOut} />
                로그아웃
              </Button>
            </Stack>
          </Stack>
          <Stack
            h={"100%"}
            p={{ base: "4", md: "6" }}
            bgColor={"white"}
            borderBottomRadius={"2xl"}
          >
            <Text>탈퇴하기</Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
