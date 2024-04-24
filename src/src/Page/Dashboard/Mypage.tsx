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
import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { delUser, logOut, useAuth } from "../../Firebase/Auth";
import { getDocument } from "../../Firebase/Database";

export const Mypage = () => {
  const currentUser: any = useAuth();
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser.uid);

      const getUser = async () => {
        const user = await getDocument("users", currentUser.uid);
        setUserInfo(user);
      };
      getUser();
    }
  }, [currentUser]);
  return (
    <Box as="section">
      <Container py={{ base: "4", md: "8" }} h={"100vh"}>
        <Stack
          borderRadius={"2xl"}
          shadow={"sm"}
          w={{ base: "full", lg: "50%" }}
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
                <Text fontSize={{ base: "lg", md: "xl" }}>{userInfo.name}</Text>
              </HStack>
              {/* <HStack justify={"space-between"}>
                <Text fontSize={{ base: "lg", md: "xl" }}>연락처</Text>
                <HStack spacing={0}>
                  <Text fontSize={{ base: "lg", md: "xl" }}>000-0000-0000</Text>
                  <Icon as={BiChevronRight} boxSize={7} />
                </HStack>
              </HStack> */}
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
                  {userInfo.email}
                </Text>
              </HStack>
              <Button
                bgColor="gray.100"
                color={"fg.onGray"}
                size={"lg"}
                gap={2}
                onClick={() => {
                  // TODO: 로그아웃
                  logOut();
                  window.location.href = "/";
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
            <Stack align={"start"} spacing={6}>
              <Button
                variant={"ghost"}
                textAlign={"left"}
                onClick={() => {
                  if (window.confirm("탈퇴하시겠습니까?")) {
                    delUser(currentUser);
                    window.location.href = "/";
                  }
                }}
              >
                탈퇴하기
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
