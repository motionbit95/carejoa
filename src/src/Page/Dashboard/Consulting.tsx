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
  HStack,
  Input,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { RadioCardGroupContainer } from "../../Component/RadioCardGroup/App";
import { RadioButtonGroupContainer } from "../../Component/RadioButtonGroup/App";
import { useState } from "react";
import { StepsWithAccent } from "../../Component/Step/StepsWithAccent";
import {
  RadioCard,
  RadioCardGroup,
} from "../../Component/RadioCardGroup/RadioCardGroup";
import {
  CheckboxCard,
  CheckboxCardGroup,
} from "../../../Application/FormElements/CheckboxCardGroup/CheckboxCardGroup";

export const Consulting = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = () => {
    // 여기에 제출 로직을 추가할 수 있습니다.
    alert("상담 내용이 제출되었습니다.");
  };

  return (
    <Box as="section">
      <StepsWithAccent currentStep={step} />
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

// 시/도, 군/구
const cities = [
  "강원",
  "경기",
  "경남",
  "경북",
  "광주",
  "대구",
  "대전",
  "부산",
  "서울",
  "세종",
  "울산",
  "인천",
  "전남",
  "전북",
  "제주",
  "충남",
  "충북",
];
const districts = {
  강원: [
    "강릉시",
    "고성군",
    "동해시",
    "삼척시",
    "속초시",
    "양구군",
    "양양군",
    "영월군",
    "원주시",
    "인제군",
    "정선군",
    "철원군",
    "춘천시",
    "태백시",
    "평창군",
    "홍천군",
    "화천군",
    "횡성군",
  ],
  경기: [
    "가평군",
    "고양시 덕양구",
    "고양시 일산동구",
    "고양시 일산서구",
    "과천시",
    "광명시",
    "광주시",
    "구리시",
    "군포시",
    "김포시",
    "남양주시",
    "동두천시",
    "부천시",
    "성남시 분당구",
    "성남시 수정구",
    "성남시 중원구",
    "수원시 권선구",
    "수원시 영통구",
    "수원시 장안구",
    "수원시 팔달구",
    "시흥시",
    "안산시 단원구",
    "안산시 상록구",
    "안성시",
    "안양시 동안구",
    "안양시 만안구",
    "양주시",
    "양평군",
    "여주시",
    "연천군",
    "오산시",
    "용인시 기흥구",
    "용인시 수지구",
    "용인시 처인구",
    "의왕시",
    "의정부시",
    "이천시",
    "파주시",
    "평택시",
    "포천시",
    "하남시",
    "화성시",
  ],
  경남: [
    "거제시",
    "거창군",
    "고성군",
    "김해시",
    "남해군",
    "밀양시",
    "사천시",
    "산청군",
    "양산시",
    "의령군",
    "진주시",
    "창녕군",
    "창원시 마산합포구",
    "창원시 마산회원구",
    "창원시 성산구",
    "창원시 의창구",
    "창원시 진해구",
    "통영시",
    "하동군",
    "함안군",
    "함양군",
    "합천군",
  ],
  경북: [
    "경산시",
    "경주시",
    "고령군",
    "구미시",
    "군위군",
    "김천시",
    "문경시",
    "봉화군",
    "상주시",
    "성주군",
    "안동시",
    "영덕군",
    "영양군",
    "영주시",
    "영천시",
    "예천군",
    "울릉군",
    "울진군",
    "의성군",
    "청도군",
    "청송군",
    "칠곡군",
    "포항시 남구",
    "포항시 북구",
  ],
  광주: ["광산구", "남구", "동구", "북구", "서구"],
  대구: ["남구", "달서구", "달성군", "동구", "북구", "서구", "수성구", "중구"],
  대전: ["대덕구", "동구", "서구", "유성구", "중구"],
  부산: [
    "강서구",
    "금정구",
    "기장군",
    "남구",
    "동구",
    "동래구",
    "부산진구",
    "북구",
    "사상구",
    "사하구",
    "서구",
    "수영구",
    "연제구",
    "영도구",
    "중구",
    "해운대구",
  ],
  서울: [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ],
  세종: [],
  울산: ["남구", "동구", "북구", "울주군", "중구"],
  인천: [
    "강화군",
    "계양구",
    "남동구",
    "동구",
    "미추홀구",
    "부평구",
    "서구",
    "연수구",
    "옹진군",
    "중구",
  ],
  전남: [
    "강진군",
    "고흥군",
    "곡성군",
    "광양시",
    "구례군",
    "나주시",
    "담양군",
    "목포시",
    "무안군",
    "보성군",
    "순천시",
    "신안군",
    "여수시",
    "영광군",
    "영암군",
    "완도군",
    "장성군",
    "장흥군",
    "진도군",
    "함평군",
    "해남군",
    "화순군",
  ],
  전북: [
    "고창군",
    "군산시",
    "김제시",
    "남원시",
    "무주군",
    "부안군",
    "순창군",
    "완주군",
    "익산시",
    "임실군",
    "장수군",
    "전주시 덕진구",
    "전주시 완산구",
    "정읍시",
    "진안군",
  ],
  제주: ["서귀포시", "제주시"],
  충남: [
    "계룡시",
    "공주시",
    "금산군",
    "논산시",
    "당진시",
    "보령시",
    "부여군",
    "서산시",
    "서천군",
    "아산시",
    "예산군",
    "천안시 동남구",
    "천안시 서북구",
    "청양군",
    "태안군",
    "홍성군",
  ],
  충북: [
    "괴산군",
    "단양군",
    "보은군",
    "영동군",
    "옥천군",
    "음성군",
    "제천시",
    "증평군",
    "진천군",
    "청주시 상당구",
    "청주시 서원구",
    "청주시 청원구",
    "청주시 흥덕구",
    "충주시",
  ],
};

export const Step1 = () => {
  const [selectedCity, setSelectedCity] = useState("서울");
  const [selectedDong, setSelectedDong] = useState("전체");
  return (
    <Container alignItems={"center"} py={{ base: "2", md: "4" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양시설 선택
          </Text>
          <Text opacity={0.5}>원하시는 요양시설을 아래에서 선택해주세요.</Text>
          <RadioCardGroupContainer />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            지역 선택
          </Text>
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
                  onClick={() => setSelectedCity(city)}
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
                    onClick={() => setSelectedDong(district)}
                    bgColor={district === selectedDong ? "accent" : ""}
                    color={district === selectedDong ? "bg.surface" : ""}
                  >
                    <Text>{district}</Text>
                  </Center>
                )
              )}
            </Stack>
          </HStack>
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
            요양시설 크기
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
          <Text opacity={0.5}>
            상급침실 비용이 높은 곳은 고급형, 평균적인 곳은 일반형, 상대적으로
            낮은 비용인 곳은 실속형으로 구분하였습니다.
            <br />
            원하시는 비용 형태를 선택 하세요.
          </Text>
          <RadioButtonGroupContainer
            list={["고급형", "일반형", "실속형", "상관없음"]}
          />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양프로그램 선택
          </Text>
          <Text opacity={0.5}>
            요양시설에서는 여러가지 요양 프로그램을 제공합니다. 또한 거동이
            불편한 어르신을 위해서 종교활동을 지원하기도 합니다.
            <br />
            원하시는 프로그램을 선택해주세요.
          </Text>
          <Stack>
            <RadioButtonGroupContainer
              list={["운동보조", "인지기능향상"]}
              py={0}
            />
            <RadioButtonGroupContainer
              list={["불교", "천주교", "기독교", "기타"]}
              py={0}
            />
            <RadioButtonGroupContainer
              list={["재활특화", "치매특화", "맞춤형서비스"]}
              py={0}
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
            어르신 성함 입력
          </Text>
          <Input placeholder="성함 입력" />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            연세 선택
          </Text>
          <RadioButtonGroupContainer
            list={["81세 이상", "71~80세", "65세~70세", "64세 이하"]}
          />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            노인장기요양등급
          </Text>
          <RadioButtonGroupContainer
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
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            혼자서 식사가 가능하신가요?
          </Text>
          <RadioButtonGroupContainer
            list={["도움없이 가능", "일부 도움 필요", "완전히 도움 필요"]}
          />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            혼자서 양치질이 가능하신가요?
          </Text>
          <RadioButtonGroupContainer
            list={["도움없이 가능", "일부 도움 필요", "완전히 도움 필요"]}
          />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            스스로 몸을 움직이셨을 때 불편하신 부분이 있으신가요?
          </Text>
          <RadioButtonGroupContainer
            list={[
              "오른쪽 상체",
              "오른쪽 하체",
              "왼쪽 상체",
              "왼쪽 하체",
              "없음",
            ]}
          />
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
          <Text opacity={0.5}>
            가족/친지가 돌볼 수 있는 최소의 시간을 뺀 나머지 지원이 필요한 필수
            시간입니다.
          </Text>
          <RadioButtonGroupContainer
            list={["10~24시간", "3~10시간", "3시간 이내"]}
          />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            월 예상 간병비는 얼마인가요?
          </Text>
          <RadioButtonGroupContainer
            py={0}
            list={["30만원 이하", "월 30~50만원", "월 50~100만원"]}
          />
          <RadioButtonGroupContainer
            py={0}
            list={["월 100~150만원", "월 150~200만원", "월 200만원 이상"]}
          />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양시설 경험이 있으신가요?
          </Text>
          <RadioButtonGroupContainer list={["있음", "없음"]} />
        </Stack>
      </Stack>
    </Container>
  );
};

export const Step4 = () => {
  return (
    <Container alignItems={"center"} py={{ base: "2", md: "4" }}>
      <Stack>
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
