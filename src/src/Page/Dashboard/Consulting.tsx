import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Container,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RadioCardGroupContainer } from "../../Component/RadioCardGroup/App";
import { RadioButtonGroupContainer } from "../../Component/RadioButtonGroup/App";
import { useState } from "react";
import { StepsWithAccent } from "../../Component/Step/StepsWithAccent";

export const Consulting = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = () => {
    // 여기에 제출 로직을 추가할 수 있습니다.
    alert("상담 내용이 제출되었습니다.");
  };

  return (
    <Box as="section">
      <StepsWithAccent currentStep={step} />
      <Stack maxW={"2xl"} mx="auto" py={{ base: "4", md: "8" }}>
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
            <Button onClick={() => handleSubmit()}>제출하기</Button>
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
            요양시설 선택
          </Text>
          <Text>원하시는 요양시설을 아래에서 선택해주세요.</Text>
          <RadioCardGroupContainer />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            지역 선택
          </Text>
          <Text>원하시는 지역을 선택해주세요.</Text>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양시설 등급
          </Text>
          <Text>
            정부에서는 주기적으로 요양시설의 적정성을 평가합니다. 가장 높은
            점수는 A등급이며 E등급까지 있습니다. 신설의 경우 등급이 없을 수
            있습니다.
          </Text>
          <RadioButtonGroupContainer />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양시설 크기
          </Text>
          <Stack spacing="1" fontSize={{ base: "sm", md: "md" }}>
            <Text>대형 : 100인 이상</Text>
            <Text>중형 : 30~100인</Text>
            <Text>소형 : 10~30인</Text>
            <Text>치매전담형 : 16인 이하</Text>
            <RadioButtonGroupContainer />
          </Stack>
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
            요양비용
          </Text>
          <Text>
            상급침실 비용이 높은 곳은 고급형, 평균적인 곳은 일반형, 상대적으로
            낮은 비용인 곳은 실속형으로 구분하였습니다.
            <br />
            원하시는 비용 형태를 선택 하세요.
          </Text>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양프로그램 선택
          </Text>
          <Text>
            요양시설에서는 여러가지 요양 프로그램을 제공합니다. 또한 거동이
            불편한 어르신을 위해서 종교활동을 지원하기도 합니다.
            <br />
            원하시는 프로그램을 선택해주세요.
          </Text>
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
            어르신 성함 입력
          </Text>
          <Input placeholder="성함 입력" />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            연세 선택
          </Text>
          <RadioButtonGroupContainer />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            노인장기요양등급
          </Text>
          <RadioButtonGroupContainer />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            혼자서 식사가 가능하신가요?
          </Text>
          <RadioButtonGroupContainer />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            혼자서 양치질이 가능하신가요?
          </Text>
          <RadioButtonGroupContainer />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            스스로 몸을 움직이셨을 때 불편하신 부분이 있으신가요?
          </Text>
          <RadioButtonGroupContainer />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            앓고 있는 질병이나 증상을 적어주세요.
          </Text>
          <Input placeholder="암, 치매, 뇌졸증, 고혈압, 당뇨병, 관절염, 심부전, 폐질환..." />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            필요한 간병 시간은 몇시간인가요?
          </Text>
          <Text>
            가족/친지가 돌볼 수 있는 최소의 시간을 뺀 나머지 지원이 필요한 필수
            시간입니다.
          </Text>
          <RadioButtonGroupContainer />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            월 예상 간병비는 얼마인가요?
          </Text>
          <RadioButtonGroupContainer />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양시설 경험이 있으신가요?
          </Text>
          <RadioButtonGroupContainer />
        </Stack>
      </Stack>
    </Container>
  );
};

export const Step4 = () => {
  return (
    <Container alignItems={"center"} py={{ base: "2", md: "4" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            개인정보 수집, 제공
          </Text>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize={{ base: "md", md: "lg" }}>
                    개인정보 수집 동의
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize={{ base: "sm", md: "md" }}>
                  개인정보 수집 동의
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize={{ base: "md", md: "lg" }}>
                    개인정보 제공 동의
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize={{ base: "sm", md: "md" }}>
                  개인정보 제공 동의
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </Stack>
    </Container>
  );
};
