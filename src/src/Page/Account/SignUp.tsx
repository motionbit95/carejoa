import {
  Button,
  Container,
  Flex,
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
import {
  RadioButton,
  RadioButtonGroup,
} from "../../Component/RadioButtonGroup/RadioButtonGroup";
import { useState } from "react";
import { TermsAgreement } from "../../Component/TermsAgreement";
import { signUp } from "../../Firebase/Auth";
import { setDocument } from "../../Firebase/Database";

export const SignUp = () => {
  const [nextForm, setNextForm] = useState<boolean>(false);

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
        {/* 회원가입 정보를 입력하면 전화번호 인증페이지로 넘어가게 수정 */}
        {!nextForm && <SignupForm setNextForm={setNextForm} />}
        {nextForm && <CertificateForm />}
      </Container>
    </Flex>
  );
};

export const SignupForm = (props: any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type: "0", // 개인 : 0, 기업 : 1
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async () => {
    console.log(formData);
    await signUp(formData.email, formData.password).then(async (res) => {
      if (!res.uid) {
        console.log("가입 실패! : ", res.error);
        alert(res.error);
      } else {
        console.log("가입 성공! : ", res.uid);
        // 회원 정보를 저장
        await setDocument("users", res.uid, {
          name: formData.name,
          email: formData.email,
          type: formData.type,
        });
        console.log("로그인 성공! uid:", res.uid);
        window.location.href = "/dashboard";
      }
    });
  };

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
            <Input
              name="name"
              type="text"
              placeholder="이름을 입력해주세요."
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email" fontWeight={"bold"} fontSize={"md"}>
              이메일 주소
            </FormLabel>
            <FormHelperText color="fg.muted">
              추후 로그인 . 시아이디로 사용됩니다.
            </FormHelperText>
            <Input
              name="email"
              type="email"
              placeholder="example@gmail.com"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password" fontWeight={"bold"} fontSize={"md"}>
              비밀번호
            </FormLabel>
            <FormHelperText color="fg.muted">
              영문, 숫자, 특수문자를 포함한 8~32자 문자열
            </FormHelperText>
            <Input
              name="password"
              type="password"
              placeholder="********"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password" fontWeight={"bold"} fontSize={"md"}>
              회원구분
            </FormLabel>
            <RadioButtonGroup
              w={"full"}
              defaultValue="1"
              name="type"
              onChange={(value) => setFormData({ ...formData, type: value })}
            >
              <RadioButton value={"0"}>개인 회원</RadioButton>
              <RadioButton value={"1"}>기관 회원</RadioButton>
            </RadioButtonGroup>
          </FormControl>
        </Stack>
        <Stack spacing="6">
          <Button size={"xl"} onClick={handleSignUp}>
            회원가입 완료
          </Button>
          {/* <Button size={"xl"} onClick={() => props.setNextForm(true)}>
            다음으로
          </Button> */}
        </Stack>
        <HStack justify={"center"}>
          <Text color="fg.muted" fontWeight={"bold"}>
            이미 회원이신가요?
          </Text>
          <Link href="/login">
            <Text fontWeight={"bold"} color="#2A67D1">
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

export const CertificateForm = (props: any) => {
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
            <FormLabel htmlFor="phone" fontWeight={"bold"} fontSize={"md"}>
              연락처
            </FormLabel>
            <HStack>
              <Input id="phone" type="number" placeholder="01012345678" />
              <Button>인증요청</Button>
            </HStack>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="code" fontWeight={"bold"} fontSize={"md"}>
              인증번호입력
            </FormLabel>
            <Input id="code" type="number" placeholder="XXXXXX" />
            <FormHelperText color="fg.muted">
              <HStack>
                <Text>인증번호를 받지 못하셨나요?</Text>
                <Text>재요청하기</Text>
              </HStack>
            </FormHelperText>
          </FormControl>
          <TermsAgreement setCheckedItems={setIsTermsAgreed} />
        </Stack>
        <Button w={"100%"} size={"xl"}>
          케어조아 시작하기
        </Button>
        <Stack align={"center"}>
          <Text fontSize="sm" color="fg.muted">
            Copyright. CareJOA Inc. All rights reserved.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
