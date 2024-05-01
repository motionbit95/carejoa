import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { delUser, logOut, useAuth } from "../../Firebase/Auth";
import { getDocument } from "../../Firebase/Database";
import { uploadFile } from "../../Firebase/Storage";

export const Mypage = () => {
  // 마이페이지
  const [showPWUpdate, setShowPWUpdate] = useState(false);
  const imageRef = useRef<HTMLInputElement>(null);

  const toggleVisibility = () => {
    setShowPWUpdate((prev) => !prev);
  };

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const firstFile = files[0];
      console.log(firstFile);
      uploadFile("profile", firstFile).then((url) => {
        console.log(url);
        setUserInfo({ ...userInfo, profile: url });
      });
    }

    if (imageRef.current) {
      imageRef.current.value = "";
    }
  };

  return (
    <Box as="section">
      <Container py={{ base: "4", md: "8" }}>
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
            <Stack spacing={7} fontSize={{ base: "lg", md: "xl" }}>
              <HStack justify={"space-between"}>
                <Text>이름</Text>
                <Text>{userInfo?.name}</Text>
              </HStack>
              <HStack justify={"space-between"}>
                <Text>프로필 이미지 등록</Text>
                <Input
                  type={"file"}
                  ref={imageRef}
                  onChange={handleChange}
                  accept="image/*"
                  display={"none"}
                />
                <Button size={"sm"} onClick={() => imageRef.current?.click()}>
                  변경하기
                </Button>
              </HStack>
              {/* <HStack justify={"space-between"}>
                <Text>연락처</Text>
                <HStack spacing={0}>
                  <Text>000-0000-0000</Text>
                  <Icon as={BiChevronRight} boxSize={7} />
                </HStack>
              </HStack> */}
              <HStack justify={"space-between"}>
                <Text>비밀번호</Text>
                <HStack
                  spacing={0}
                  onClick={toggleVisibility}
                  cursor={"pointer"}
                >
                  <Text>변경하기</Text>
                  <Icon as={BiChevronRight} boxSize={7} />
                </HStack>
              </HStack>
              {showPWUpdate && <PWUpdate />}
              <HStack justify={"space-between"}>
                <Text>이메일</Text>
                <Text>{userInfo?.email}</Text>
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

export const PWUpdate = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePWUpdate = (e: any) => {
    if (e.target.name === "current-password") {
      setCurrentPassword(e.target.value);
    } else if (e.target.name === "new-password") {
      setNewPassword(e.target.value);
    } else if (e.target.name === "confirm-password") {
      setConfirmPassword(e.target.value);
    }
    // setPasswordsMatch(newPassword === confirmPassword);
  };

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      alert("비밀번호 변경");
    } else {
      console.log(
        "비밀번호가 일치하지 않습니다.",
        `${currentPassword} ${newPassword} ${confirmPassword} ${
          newPassword === confirmPassword
        }`
      );
    }
  };

  return (
    <Stack
      borderRadius={"xl"}
      shadow={"sm"}
      p={4}
      spacing={4}
      bgColor={"gray.200"}
    >
      <Text fontWeight={"bold"} fontSize={{ base: "lg", md: "xl" }}>
        비밀번호 변경
      </Text>
      <InputGroup flexDirection={"column"} gap={2}>
        <FormControl>
          <FormLabel htmlFor="current-password">현재 비밀번호</FormLabel>
          <Input
            type="password"
            name="current-password"
            value={currentPassword}
            onChange={handlePWUpdate}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="new-password">새로운 비밀번호</FormLabel>
          <Input
            type="password"
            name="new-password"
            value={newPassword}
            onChange={handlePWUpdate}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="confirm-password">비밀번호 확인</FormLabel>
          <Input
            type="password"
            name="confirm-password"
            value={confirmPassword}
            onChange={handlePWUpdate}
          />
        </FormControl>
      </InputGroup>

      <Box w={"full"} textAlign={"right"}>
        <Tooltip label="변경 후 로그인 화면으로 이동합니다.">
          <Button onClick={handleSubmit}>변경하기</Button>
        </Tooltip>
      </Box>
    </Stack>
  );
};
