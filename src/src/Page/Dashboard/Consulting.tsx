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
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  StackDivider,
  Text,
  useToast,
} from "@chakra-ui/react";
import { RadioCardGroupContainer } from "../../Component/RadioCardGroup/App";
import { RadioButtonGroupContainer } from "../../Component/RadioButtonGroup/App";
import { useEffect, useState } from "react";
import { StepsWithAccent } from "../../Component/Step/StepsWithAccent";
import {
  CheckboxCard,
  CheckboxCardGroup,
} from "../../../Application/FormElements/CheckboxCardGroup/CheckboxCardGroup";
import { cities, districts } from "./data";
import { addDocument } from "../../Firebase/Database";
import { SelectButton } from "../../Component/SelectButton";
import { doc, getDoc } from "firebase/firestore";

interface UserData {
  userInfo: {
    id: string; // 유저정보
    // step1
    shelter: string; // 요양시설
    city: string; // 시
    dong: string; // 동
    rank: string; // 요양시설 등급
    size: string; // 요양시설 크기
    //step2
    grade: string; // 요양비용
    program: string; // 요양프로그램
    //step3
    senior_name: string; // 어르신 성함
    senior_age: string; // 어르신 연세
    care_grade: string; // 노인장기요양등급
    need_help_meal: string; // 식사도움여부
    need_help_brushing_teeth: string; // 양치도움여부
    physical_condition: string; // 불편한 신체부위
    problem: string; // 질병또는 지병
    nursing_time: string; // 간병시간
    price: string; // 간병비용
    experience: string; // 시설 경험
    //step4
    agreement: boolean; // 개인정보 이용동의
  };
}

export const Consulting = (props: UserData) => {
  // 컨설팅 페이지
  const { userInfo } = props;
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  // 유저 정보(uid)를 consulting 페이지에 가져오기
  useEffect(() => {
    console.log("컨설팅 유저정보", userInfo);
  }, [userInfo]);

  // FormData에 저장된 내용 addDoc으로 firebase에 문서 추가
  const handleSubmit = () => {
    console.log(formData, userInfo.id);
    addDocument("consulting", { ...formData, uid: userInfo.id }).then(() => {
      toast({
        title: "상담 내용을 제출합니다.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });
    console.log(formData);
  };

  return (
    <Box as="section">
      <StepsWithAccent
        currentStep={step}
        steps={[
          "요양시설 선택",
          "요양 프로그램 선택",
          "환자 상태 입력",
          "개인정보 이용동의",
        ]}
      />
      <form onSubmit={handleSubmit}>
        <Stack maxW={"2xl"} mx="auto" py={{ base: "2", md: "4" }}>
          {step === 1 && (
            <Step1 formData={formData} setFormData={setFormData} />
          )}
          {step === 2 && (
            <Step2 formData={formData} setFormData={setFormData} />
          )}
          {step === 3 && (
            <Step3 formData={formData} setFormData={setFormData} />
          )}
          {step === 4 && (
            <Step4 formData={formData} setFormData={setFormData} />
          )}
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
              <Button type="button" onClick={() => setStep(step + 1)}>
                저장하고 다음단계로
              </Button>
            ) : (
              <Button onClick={handleSubmit}>
                동의하고 무료 상담 신청하기
              </Button>
            )}
          </ButtonGroup>
        </Stack>
      </form>
    </Box>
  );
};

interface StepConsultingProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const Step1 = ({ formData, setFormData }: StepConsultingProps) => {
  const [selectedCity, setSelectedCity] = useState("서울");
  const [selectedDong, setSelectedDong] = useState("전체");

  const handleselectCity = (value: string) => {
    // console.log(value);
    setSelectedCity(value);
    setFormData({ ...formData, city: value });
  };

  const handleselectDong = (value: string) => {
    // console.log(value);
    setSelectedDong(value);
    setFormData({ ...formData, dong: value });
  };

  return (
    <Container alignItems={"center"} py={{ base: "2", md: "4" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              요양시설 선택
            </FormLabel>
            <Text opacity={0.5}>
              원하시는 요양시설을 아래에서 선택해주세요.
            </Text>
            <RadioCardGroupContainer
              onChange={(value: any) => {
                setFormData({ ...formData, shelter: value });
              }}
            />
          </FormControl>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              지역 선택
            </FormLabel>
            <Text opacity={0.5}>원하시는 지역을 선택해주세요.</Text>
            <HStack
              w={"full"}
              justifyContent={"space-between"}
              spacing={0}
              borderRadius={"xl"}
              overflow={"hidden"}
              border={"1px"}
              borderColor={"gray.200"}
              alignItems={"flex-start"}
            >
              <Stack
                w={"30%"}
                maxH={"400px"}
                py={{ base: "1", md: "2" }}
                overflowY={"auto"}
                overflowX={"hidden"}
                bgColor={"gray.50"}
                spacing={0}
                divider={<StackDivider />}
              >
                {cities.map((city) => (
                  <Center
                    cursor={"pointer"}
                    p={{ base: "1", md: "2" }}
                    onClick={() => handleselectCity(city)}
                    bgColor={city === selectedCity ? "accent" : ""}
                    color={city === selectedCity ? "bg.surface" : ""}
                  >
                    <Text>{city}</Text>
                  </Center>
                ))}
              </Stack>
              <Stack
                spacing={0}
                py={{ base: "1", md: "2" }}
                w={"70%"}
                maxH={"400px"}
                overflowY={"auto"}
                overflowX={"hidden"}
                divider={<StackDivider />}
              >
                <Center
                  p={{ base: "1", md: "2" }}
                  cursor={"pointer"}
                  onClick={() => setSelectedDong("전체")}
                  bgColor={selectedDong === "전체" ? "accent" : ""}
                  color={selectedDong === "전체" ? "bg.surface" : ""}
                >
                  <Text>{"전체"}</Text>
                </Center>
                {districts[selectedCity as keyof typeof districts]?.map(
                  (district: string) => (
                    <Center
                      p={{ base: "1", md: "2" }}
                      cursor={"pointer"}
                      onClick={() => handleselectDong(district)}
                      bgColor={district === selectedDong ? "accent" : ""}
                      color={district === selectedDong ? "bg.surface" : ""}
                    >
                      <Text>{district}</Text>
                    </Center>
                  )
                )}
              </Stack>
            </HStack>
          </FormControl>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              요양시설 등급
            </FormLabel>
            <Text opacity={0.5}>
              정부에서는 주기적으로 요양시설의 적정성을 평가합니다. 가장 높은
              점수는 A등급이며 E등급까지 있습니다. 신설의 경우 등급이 없을 수
              있습니다.
            </Text>
            <RadioButtonGroupContainer
              onChange={(e: any) => {
                setFormData({ ...formData, rank: e.target.value });
              }}
              list={["A등급", "B등급", "C등급", "D등급", "E등급", "상관없음"]}
            />
          </FormControl>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              요양시설 크기
            </FormLabel>
            <Stack spacing="1" fontSize={{ base: "sm", md: "md" }}>
              <Text opacity={0.5}>대형 : 100인 이상</Text>
              <Text opacity={0.5}>중형 : 30~100인</Text>
              <Text opacity={0.5}>소형 : 10~30인</Text>
              <Text opacity={0.5}>치매전담형 : 16인 이하</Text>
              <RadioButtonGroupContainer
                onChange={(e: any) => {
                  setFormData({ ...formData, size: e.target.value });
                }}
                list={["대형", "중형", "소형", "치매전담형", "상관없음"]}
              />
            </Stack>
          </FormControl>
        </Stack>
      </Stack>
    </Container>
  );
};

export const Step2 = ({ formData, setFormData }: StepConsultingProps) => {
  return (
    <Container alignItems={"center"} py={{ base: "2", md: "4" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              요양비용
            </FormLabel>
            <Text opacity={0.5}>
              상급침실 비용이 높은 곳은 고급형, 평균적인 곳은 일반형, 상대적으로
              낮은 비용인 곳은 실속형으로 구분하였습니다.
              <br />
              원하시는 비용 형태를 선택 하세요.
            </Text>
            <RadioButtonGroupContainer
              onChange={(e: any) => {
                setFormData({ ...formData, grade: e.target.value });
              }}
              list={["고급형", "일반형", "실속형", "상관없음"]}
            />
          </FormControl>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              요양프로그램 선택
            </FormLabel>
            <Text opacity={0.5}>
              요양시설에서는 여러가지 요양 프로그램을 제공합니다. 또한 거동이
              불편한 어르신을 위해서 종교활동을 지원하기도 합니다.
              <br />
              원하시는 프로그램을 선택해주세요.
            </Text>
            <SelectButton
              onChange={(value: any) => {
                setFormData({ ...formData, program: value });
              }}
              multiple
              options={[
                "운동보조",
                "인지기능향상",
                "기타",
                "불교",
                "기독교",
                "천주교",
                "재활특화",
                "치매특화",
                "맞춤형서비스",
              ]}
            />
          </FormControl>
        </Stack>
      </Stack>
    </Container>
  );
};

export const Step3 = ({ formData, setFormData }: StepConsultingProps) => {
  return (
    <Container alignItems={"center"} py={{ base: "2", md: "4" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              어르신 성함 입력
            </FormLabel>
            <Input
              placeholder="성함 입력"
              onChange={(e) =>
                setFormData({ ...formData, senior_name: e.target.value })
              }
            />
          </FormControl>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              연세 선택
            </FormLabel>
            <RadioButtonGroupContainer
              onChange={(e: any) => {
                setFormData({ ...formData, senior_age: e.target.value });
              }}
              list={["81세 이상", "71~80세", "65세~70세", "64세 이하"]}
            />
          </FormControl>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              노인장기요양등급
            </FormLabel>
            <RadioButtonGroupContainer
              onChange={(e: any) => {
                setFormData({ ...formData, care_grade: e.target.value });
              }}
              list={[
                "1등급",
                "2등급",
                "3등급",
                "4등급",
                "5등급",
                "인지등급",
                "모름",
              ]}
            />
          </FormControl>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              혼자서 식사가 가능하신가요?
            </FormLabel>
            <RadioButtonGroupContainer
              onChange={(e: any) => {
                setFormData({ ...formData, need_help_meal: e.target.value });
              }}
              list={["도움없이 가능", "일부 도움 필요", "완전히 도움 필요"]}
            />
          </FormControl>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              혼자서 양치질이 가능하신가요?
            </FormLabel>
            <RadioButtonGroupContainer
              onChange={(e: any) => {
                setFormData({
                  ...formData,
                  need_help_brushing_teeth: e.target.value,
                });
              }}
              list={["도움없이 가능", "일부 도움 필요", "완전히 도움 필요"]}
            />
          </FormControl>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              스스로 몸을 움직이셨을 때 불편하신 부분이 있으신가요?
            </FormLabel>
            <RadioButtonGroupContainer
              onChange={(e: any) => {
                setFormData({
                  ...formData,
                  physical_condition: e.target.value,
                });
              }}
              list={[
                "오른쪽 상체",
                "오른쪽 하체",
                "왼쪽 상체",
                "왼쪽 하체",
                "없음",
              ]}
            />
          </FormControl>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              앓고 있는 질병이나 증상을 적어주세요.
            </FormLabel>
            <Input
              placeholder="암, 치매, 뇌졸증, 고혈압, 당뇨병, 관절염, 심부전, 폐질환..."
              onChange={(e) =>
                setFormData({ ...formData, problem: e.target.value })
              }
            />
          </FormControl>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              필요한 간병 시간은 몇시간인가요?
            </FormLabel>
            <Text opacity={0.5}>
              가족/친지가 돌볼 수 있는 최소의 시간을 뺀 나머지 지원이 필요한
              필수 시간입니다.
            </Text>
            <RadioButtonGroupContainer
              onChange={(e: any) =>
                setFormData({ ...formData, nursing_time: e.target.value })
              }
              list={["10~24시간", "3~10시간", "3시간 이내"]}
            />
          </FormControl>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              월 예상 간병비는 얼마인가요?
            </FormLabel>
            <SelectButton
              onChange={(value: any) => {
                setFormData({ ...formData, price: value });
              }}
              options={[
                "30만원 이하",
                "월 30~50만원",
                "월 50~50만원",
                "월 100~150만원",
                "월 150~200만원",
                "월 200만원 이상",
              ]}
            />
          </FormControl>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              요양시설 경험이 있으신가요?
            </FormLabel>
            <RadioButtonGroupContainer
              onChange={(e: any) =>
                setFormData({ ...formData, experience: e.target.value })
              }
              list={["있음", "없음"]}
            />
          </FormControl>
        </Stack>
      </Stack>
    </Container>
  );
};

export const Step4 = ({ formData, setFormData }: StepConsultingProps) => {
  return (
    <Container alignItems={"center"} py={{ base: "2", md: "4" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <FormControl>
            <FormLabel fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              개인정보 수집, 제공
            </FormLabel>
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
          </FormControl>
        </Stack>

        <CheckboxCardGroup defaultValue={["one"]} spacing="3">
          {["one"].map((option) => (
            <CheckboxCard key={option} value={option}>
              <Text color="fg.emphasized" fontWeight="medium" fontSize="sm">
                상담 서비스 이용을 위한 개인정보 수집 및 제3자 제공에
                확인하였으며 이에 동의합니다.
              </Text>
            </CheckboxCard>
          ))}
        </CheckboxCardGroup>
      </Stack>
    </Container>
  );
};
