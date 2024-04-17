import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

export const Login = () => (
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
        <Heading>CareJOA</Heading>
        <Stack spacing="3" textAlign="center">
          <Heading size="xs">요양상담서비스, 케어조아</Heading>
          <Text color="fg.muted">
            아직 회원이 아니신가요? <Link href="#">회원가입하기</Link>
          </Text>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl isRequired>
            <FormLabel htmlFor="email">아이디</FormLabel>
            <Input id="email" type="email" placeholder="example@gmail.com" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">비밀번호</FormLabel>
            <Input id="password" type="password" placeholder="비밀번호 입력" />
            <FormHelperText color="fg.muted">
              At least 8 characters long
            </FormHelperText>
          </FormControl>
        </Stack>
        <Stack spacing="6">
          <Button>로그인</Button>
        </Stack>
        <Stack align={"center"}>
          <Link href="#">비밀번호를 잊으셨나요?</Link>
        </Stack>
      </Stack>
      <Stack align={"center"}>
        <Text fontSize="sm" color="fg.muted">
          Copyright. CareJOA Inc. All rights reserved.
        </Text>
      </Stack>
    </Stack>
  </Container>
);
