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
import {
  RadioButton,
  RadioButtonGroup,
} from "../../Component/RadioButtonGroup/RadioButtonGroup";
import { useState } from "react";
import { TermsAgreement } from "../../Component/TermsAgreement";

export const SignUp = (prop: any) => {
  const [showForm, setShowForm] = useState<boolean>(false);

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
        {!showForm && <SignupForm onClick={() => setShowForm(true)} />}
        {showForm && <CertificateForm />}
        {/* <CertificateForm /> */}
      </Container>
    </Flex>
  );
};

export const SignupForm = (props: { onClick: () => void }) => {
  return (
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
            <FormLabel htmlFor="name" fontWeight={"bold"} fontSize={"md"}>
              이름
            </FormLabel>
            <Input id="name" type="text" placeholder="이름을 입력해주세요." />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email" fontWeight={"bold"} fontSize={"md"}>
              이메일 주소
            </FormLabel>
            <FormHelperText color="fg.muted">
              추후 로그인 . 시아이디로 사용됩니다.
            </FormHelperText>
            <Input id="email" type="email" placeholder="example@gmail.com" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password" fontWeight={"bold"} fontSize={"md"}>
              비밀번호
            </FormLabel>
            <FormHelperText color="fg.muted">
              영문, 숫자, 특수문자를 포함한 8~32자 문자열
            </FormHelperText>
            <Input id="password" type="password" placeholder="********" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password" fontWeight={"bold"} fontSize={"md"}>
              회원구분
            </FormLabel>
            <RadioButtonGroup defaultValue="1">
              <RadioButton value="1">개인 회원</RadioButton>
              <RadioButton value="2">기간 회원</RadioButton>
            </RadioButtonGroup>
          </FormControl>
        </Stack>
        <Stack spacing="6">
          <Button size={"xl"} onClick={props.onClick}>
            다음으로
          </Button>
        </Stack>
        <HStack justify={"center"}>
          <Text color="fg.muted" fontWeight={"bold"}>
            이미 회원이신가요?
          </Text>
          <Link to="/login">
            <Text
              fontWeight={"bold"}
              color="#2A67D1"
              textDecoration={"underline"}
            >
              로그인하기
            </Text>
          </Link>
        </HStack>
        <Stack align={"center"}>
          <Text fontSize="sm" color="fg.muted">
            Copyright. CareJOA Inc. All rights reserved.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const CertificateForm = () => {
  const [isTermsAgreed, setIsTermsAgreed] = useState([
    false,
    false,
    false,
    false,
  ]);
  return (
    <Stack spacing="8">
      <Stack spacing="6" align="center">
        {/* <Logo /> */}
        <Stack spacing="3" textAlign="center">
          <Heading size="sm" fontWeight="extrabold">
            전화번호 인증
          </Heading>
          <Text color="fg.muted">
            본인 소유의 휴대폰 번호로 연락처 인증하기
            <br />
            ‘-’를 제외한 전체 번호를 입력해주세요.
          </Text>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl isRequired>
            <FormLabel htmlFor="name" fontWeight={"bold"} fontSize={"md"}>
              연락처
            </FormLabel>
            <HStack>
              <Input id="name" placeholder="01012345678" />
              <Button>인증요청</Button>
            </HStack>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email" fontWeight={"bold"} fontSize={"md"}>
              인증번호입력
            </FormLabel>
            <Input id="email" type="email" placeholder="XXXXXX" />
            <FormHelperText color="fg.muted">
              <HStack>
                <Text>인증번호를 받지 못하셨나요?</Text>
                <Text>재요청하기</Text>
              </HStack>
            </FormHelperText>
          </FormControl>
          <TermsAgreement setCheckedItems={setIsTermsAgreed} />
        </Stack>
        <Link to="/">
          <Button w={"100%"} size={"xl"}>
            케어조아 시작하기
          </Button>
        </Link>
        <Stack align={"center"}>
          <Text fontSize="sm" color="fg.muted">
            Copyright. CareJOA Inc. All rights reserved.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
