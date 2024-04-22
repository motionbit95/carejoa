import {
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const SignUp = () => (
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
          <Stack spacing="3" textAlign="center">
            <Heading size="sm" fontWeight="extrabold">
              회원가입 정보 입력
            </Heading>
          </Stack>
        </Stack>
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl isRequired>
              <FormLabel htmlFor="name">이름</FormLabel>
              <Input id="name" type="text" placeholder="이름을 입력해주세요." />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">이메일 주소</FormLabel>
              <FormHelperText color="fg.muted">
                추후 로그인 . 시아이디로 사용됩니다.
              </FormHelperText>
              <Input id="email" type="email" placeholder="example@gmail.com" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">비밀번호</FormLabel>
              <FormHelperText color="fg.muted">
                영문, 숫자, 특수문자를 포함한 8~32자 문자열
              </FormHelperText>
              <Input id="password" type="password" placeholder="********" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">회원구분</FormLabel>
              <Input />
            </FormControl>
          </Stack>
          <Stack spacing="6">
            <Button>다음으로</Button>
          </Stack>
          <HStack spacing="6" justify={"center"}>
            <Text color="fg.muted" fontWeight={"bold"}>
              이미 회원이신가요?
            </Text>
            <Link to="/login">로그인하기</Link>
          </HStack>
          <Stack align={"center"}>
            <Text fontSize="sm" color="fg.muted">
              Copyright. CareJOA Inc. All rights reserved.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  </Flex>
);
