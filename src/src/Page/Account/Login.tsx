import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Forgot } from "./Forgot";
import { useState } from "react";
import { signIn } from "../../Firebase/Auth";

export const Login = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    console.log(formData);
    let res = await signIn(formData.email, formData.password);
    console.log(res);

    if (!res.uid) {
      // 로그인 실패
      alert(res.error);
    } else {
      // 로그인 성공
      console.log("로그인 성공! uid:", res.uid);
      window.location.href = "/dashboard";
    }
  };

  return (
    <Flex flex="1" align="center">
      <Container
        maxW="md"
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        bg={{ base: "transparent", sm: "bg.surface" }}
        boxShadow={{ base: "none", sm: "md" }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack spacing="8">
          <Stack spacing="6" align="center">
            {/* <Logo /> */}
            {/* <Heading>CareJOA</Heading> */}
            <Image height={"64px"} src={require("../../asset/CareJOA.png")} />
            <Stack spacing="3" textAlign="center">
              <Heading size="xs">요양상담서비스, 케어조아</Heading>
              <HStack>
                <Text color="fg.muted" fontWeight={"bold"}>
                  아직 회원이 아니신가요?
                </Text>
                <Link href="/signup">
                  <Text fontWeight={"bold"} color="#2A67D1">
                    회원가입하기
                  </Text>
                </Link>
              </HStack>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl isRequired>
                <FormLabel htmlFor="email" fontWeight={"bold"} fontSize={"md"}>
                  아이디
                </FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel
                  htmlFor="password"
                  fontWeight={"bold"}
                  fontSize={"md"}
                >
                  비밀번호
                </FormLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder="비밀번호 입력"
                  onChange={handleChange}
                />
              </FormControl>
              <Button onClick={handleLogin}>로그인</Button>
            </Stack>
            <Stack align={"center"}>
              <Text
                cursor={"pointer"}
                onClick={() => setPopupOpen(true)}
                fontWeight={"bold"}
                color="#2A67D1"
              >
                비밀번호를 잊으셨나요?
              </Text>
              <Forgot isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
            </Stack>
          </Stack>
          <Stack align={"center"}>
            <Text fontSize="sm" color="fg.muted">
              Copyright. CareJOA Inc. All rights reserved.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};
