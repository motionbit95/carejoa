import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { RadioCardGroupContainer } from "../../Component/RadioCardGroup/App";
import { RadioButtonGroupContainer } from "../../Component/RadioButtonGroup/App";
import { useState } from "react";
import { StepsWithAccent } from "../../Component/Step/StepsWithAccent";
import {
  CheckboxCard,
  CheckboxCardGroup,
} from "../../../Application/FormElements/CheckboxCardGroup/CheckboxCardGroup";
import { Filter } from "../../Component/Filter";
import { CardList } from "../../Component/CardList/CardList";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { estimateList } from "./data";
import { StepsWithCirclesAndText } from "../../Component/StepsWithCirclesAndText/App";
import { CareInput } from "../../Component/CareInput";
import { CalculateInput } from "../../Component/CalculateInput";

export const Estimate = ({ ...props }) => {
  return (
    <Box as="section">
      <Flex
        justify={"space-between"}
        align={"center"}
        px={"4"}
        py={{ base: "2", md: "4" }}
      >
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
          견적서 목록
        </Text>
        <Button size={"sm"} onClick={() => props.onclick("createEstimate")}>
          견적서 생성하기
        </Button>
      </Flex>
      <Filter onFilter={(filter) => console.log(filter)} />
      <Stack px={"4"} py={{ base: "2", md: "4" }}>
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4}>
          {estimateList.map((estimate, index) => (
            <CardList
              bgColor={index % 2 === 0 ? "#EBF8FF" : "#F5F6F8"}
              key={index}
              {...estimate}
            />
          ))}
          {/* <Flex p={3} gap={6} alignItems={"center"}>
          <Icon
            cursor={"pointer"}
            as={BsChevronLeft}
            boxSize={{ base: "3", md: "4" }}
          />
          <Text>1</Text>
          <Icon
            cursor={"pointer"}
            as={BsChevronRight}
            boxSize={{ base: "3", md: "4" }}
          />
        </Flex> */}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export const CreateEstimate = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = () => {
    // 여기에 제출 로직을 추가할 수 있습니다.
    alert("상담 내용이 제출되었습니다.");
  };

  return (
    <Box as="section">
      <StepsWithCirclesAndText
        currentStep={step}
        title={["시설개요", "치료 / 의료", "요양 / 시설", "본인부담금"]}
      />
      <Stack maxW={"2xl"} mx="auto" py={{ base: "2", md: "4" }}>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </Stack>
      <Stack py={{ base: "2", md: "4" }} align="center">
        <ButtonGroup size="lg" colorScheme="blue">
          <Button
            variant={"outline"}
            onClick={() => setStep(step - 1)}
            display={step === 1 ? "none" : "block"}
          >
            이전단계로
          </Button>
          {step !== 4 ? (
            <Button onClick={() => setStep(step + 1)}>
              저장하고 다음단계로
            </Button>
          ) : (
            <Button onClick={() => handleSubmit()}>
              동의하고 무료 상담 신청하기
            </Button>
          )}
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export const Step1 = () => {
  return (
    <Container alignItems={"center"} py={{ base: "2", md: "4" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양시설 이름 입력
          </Text>
          <Input placeholder="이름 입력" />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양시설 사진 등록
          </Text>
          <Text opacity={0.5}>업로드 이미지</Text>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            주소 입력
          </Text>
          <Text opacity={0.5}>요양시설의 주소를 입력해주세요.</Text>
          <HStack>
            <Input placeholder="주소 입력" />
            <Button>주소검색</Button>
          </HStack>
          <Input placeholder="상세주소" />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            전화번호 입력
          </Text>
          <Text opacity={0.5}>
            상담 연락이 가능한 요양시설의 전화번호를 입력해주세요.
          </Text>
          <Input placeholder="전화번호 입력" />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양시설 등급
          </Text>
          <Text opacity={0.5}>
            정부에서는 주기적으로 요양시설의 적정성을 평가합니다. 가장 높은
            점수는 A등급이며 E등급까지 있습니다. 신설의 경우 등급이 없을 수
            있습니다.
          </Text>
          <RadioButtonGroupContainer
            list={["A등급", "B등급", "C등급", "D등급", "E등급", "상관없음"]}
          />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양시설 크기(허가병상)
          </Text>
          <Stack spacing="1" fontSize={{ base: "sm", md: "md" }}>
            <Text opacity={0.5}>대형 : 100인 이상</Text>
            <Text opacity={0.5}>중형 : 30~100인</Text>
            <Text opacity={0.5}>소형 : 10~30인</Text>
            <Text opacity={0.5}>치매전담형 : 16인 이하</Text>
            <RadioButtonGroupContainer
              list={["대형", "중형", "소형", "치매전담형", "상관없음"]}
            />
          </Stack>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            특화영역
          </Text>
          <RadioButtonGroupContainer
            list={["암특화", "재활특화", "혈액투석", "양한방협진", "기타"]}
          />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            설립일자
          </Text>
          <Input type="date" />
        </Stack>
      </Stack>
    </Container>
  );
};

export const Step2 = () => {
  return (
    <Container alignItems={"center"} py={{ base: "2", md: "4" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            의료 인력
          </Text>
          <Stack pt={"2"}>
            <CareInput id="doctor" label="의사" count="명" />
            <CareInput id="dentist" label="치과의사" count="명" />
            <CareInput id="dkom" label="한의사" count="명" />
          </Stack>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            진료과목(전문의 수)
          </Text>
          <Stack pt={"2"}>
            <CareInput id="medicine" label="내과" count="명" />
            <CareInput id="rehabilitation" label="재활의학과" count="명" />
            <CareInput id="family" label="가정의학과" count="명" />
            <CareInput id="neurosurgery" label="신경외과" count="명" />
            <CareInput id="Oriental" label="한방내과" count="명" />
            <CareInput id="bedclothes" label="침구과" count="명" />
          </Stack>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            치료 인력
          </Text>
          <Stack pt={"2"}>
            <CareInput id="physical_therapist" label="물리치료사" count="명" />
            <CareInput
              id="occupational_therapist"
              label="작업치료사"
              count="명"
            />
            <CareInput
              id="physical_therapyroom"
              label="물리치료실"
              count="실"
            />
          </Stack>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            치료 인력
          </Text>
          <Stack pt={"2"}>
            <CareInput
              id="physical_therapist"
              label="물리치료사"
              count="대"
              istype
            />
            <CareInput
              id="occupational_therapist"
              label="작업치료사"
              count="대"
              istype
            />
            <CareInput
              id="physical_therapyroom"
              label="물리치료실"
              count="대"
              istype
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export const Step3 = () => {
  return (
    <Container alignItems={"center"} py={{ base: "2", md: "4" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양프로그램 선택
          </Text>
          <Text opacity={0.5}>
            요양시설에서는 여러가지 요양 프로그램을 제공합니다. 또한 거동이
            불편한 어르신을 위해서 종교활동을 지원하기도 합니다. 원하시는
            프로그램을 선택해주세요.
          </Text>
          <Stack pt={"4"}>
            <RadioButtonGroupContainer
              py={0}
              list={["운동보조", "인지기능향상"]}
            />
            <RadioButtonGroupContainer
              py={0}
              list={["불교", "천주교", "기독교", "기타"]}
            />
            <RadioButtonGroupContainer
              py={0}
              list={["재활특화", "치매특화", "맞춤형 서비스"]}
            />
          </Stack>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양인력
          </Text>
          <Stack pt={"2"}>
            <CareInput id="physical_therapist" label="사회복지사" count="명" />
            <CareInput id="occupational_therapist" label="영양사" count="명" />
            <CareInput id="physical_therapyroom" label="조리사" count="명" />
          </Stack>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양비용
          </Text>
          <Text opacity={0.5}>
            요양시설에서는 여러가지 요양 프로그램을 제공합니다. 또한 거동이
            불편한 어르신을 위해서 종교활동을 지원하기도 합니다. 원하시는
            프로그램을 선택해주세요.
          </Text>
          <RadioButtonGroupContainer
            list={["고급형", "일반형", "실속형", "상관없음"]}
          />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            침실구성
          </Text>
          <Stack pt={"2"}>
            <CareInput id="physical_therapist" label="상급병상" count="개" />
            <CareInput
              id="occupational_therapist"
              label="일반병상"
              count="개"
            />
            <CareInput id="physical_therapyroom" label="격리병상" count="개" />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export const Step4 = () => {
  return (
    <Container alignItems={"center"} py={{ base: "2", md: "4" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <CalculateInput title="입원비" />
        <CalculateInput title="식대" />
        <CalculateInput title="비급여 상급병상" />
        <CalculateInput title="비급여 간병비" />
      </Stack>
    </Container>
  );
};
