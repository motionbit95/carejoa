import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { RadioButtonGroupContainer } from "../../Component/RadioButtonGroup/App";
import { useEffect, useState } from "react";
import { Filter } from "../../Component/Filter";
import { CardList } from "../../Component/CardList/CardList";
import { estimateList } from "./data";
import { StepsWithCirclesAndText } from "../../Component/StepsWithCirclesAndText/App";
import { CareInput } from "../../Component/CareInput";
import { CalculateInput } from "../../Component/CalculateInput";
import { HiUpload } from "react-icons/hi";
import { SelectButton } from "../../Component/SelectButton";
import { addDocument } from "../../Firebase/Database";

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
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

interface EstimateData {
  userInfo: {
    id: string; // 유저정보
    // step1
    shelter_name: string; // 요양시설명 -OK
    shelter_image: string; // 요양시설이미지 -x
    shelter_address: string; // 요양시설주소 -x
    shelter_tel: string; // 요양시설번호 -OK
    shelter_rank: string; // 요양시설등급 -OK
    shelter_size: string; // 요양시설크기 -OK
    shelter_specialization: string; // 요양시설 정보 -Ok
    establishment_date: string; // 설립일 -OK
    //step2
    label: string; // 라벨
    count: string; // 인원(장비)수
    //step3
    shelter_program: string; // 프로그램 -X
    shelter_grade: string; // 요양 비용 등급 -X
    //step4
    price: string; // 비용
  };
}

export const CreateEstimate = (props: EstimateData) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const toast = useToast();

  const { userInfo } = props;
  useEffect(() => {
    console.log("견적 기관정보", userInfo);
  }, [userInfo]);

  const handleSubmit = () => {
    console.log(formData);
    addDocument("estimate", { ...formData, uid: userInfo.id }).then(() => {
      toast({
        title: "견적 내용을 제출합니다.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });
    console.log(formData);
  };

  return (
    <Box as="section">
      <StepsWithCirclesAndText
        currentStep={step}
        title={["시설개요", "치료 / 의료", "요양 / 시설", "본인부담금"]}
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
              <Button onClick={handleSubmit}>견적서 저장하기</Button>
            )}
          </ButtonGroup>
        </Stack>
      </form>
    </Box>
  );
};

interface StepEstimateProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const Step1 = ({ formData, setFormData }: StepEstimateProps) => {
  const handleUploadImage = () => {
    console.log("이미지 업로드");
  };

  return (
    <Container alignItems={"center"} py={{ base: "2", md: "4" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양시설 이름 입력
          </Text>
          <Input
            placeholder="이름 입력"
            onChange={(e) =>
              setFormData({ ...formData, shelter_name: e.target.value })
            }
          />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양시설 사진 등록
          </Text>
          <Stack
            px={{ base: "16", md: "24" }}
            py={{ base: "8", md: "12" }}
            border={"2px dashed #d9d9d9"}
            borderRadius={"xl"}
          >
            <Button onClick={handleUploadImage} leftIcon={<HiUpload />}>
              이미지 업로드
            </Button>
          </Stack>
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
          <Input
            placeholder="전화번호 입력"
            onChange={(e) =>
              setFormData({ ...formData, shelter_tel: e.target.value })
            }
          />
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
            onChange={(e: any) => {
              setFormData({ ...formData, shelter_rank: e.target.value });
            }}
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
              onChange={(e: any) => {
                setFormData({ ...formData, shelter_size: e.target.value });
              }}
              list={["대형", "중형", "소형", "치매전담형", "상관없음"]}
            />
          </Stack>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            특화영역
          </Text>
          <RadioButtonGroupContainer
            onChange={(e: any) => {
              setFormData({
                ...formData,
                shelter_specialization: e.target.value,
              });
            }}
            list={["암특화", "재활특화", "혈액투석", "양한방협진", "기타"]}
          />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            설립일자
          </Text>
          <Input
            type="date"
            onChange={(e) =>
              setFormData({ ...formData, establishment_date: e.target.value })
            }
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export const Step2 = ({ formData, setFormData }: StepEstimateProps) => {
  const handleCountChange = (label: string, count: number) => {
    setFormData({
      ...formData,
      [label]: count,
    });
  };

  return (
    <Container alignItems={"center"} py={{ base: "2", md: "4" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            의료 인력
          </Text>
          <Stack pt={"2"}>
            <CareInput
              id="doctor"
              label="의사"
              count="명"
              onChange={handleCountChange}
            />
            <CareInput
              id="dentist"
              label="치과의사"
              count="명"
              onChange={handleCountChange}
            />
            <CareInput
              id="dkom"
              label="한의사"
              count="명"
              onChange={handleCountChange}
            />
          </Stack>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            진료과목(전문의 수)
          </Text>
          <Stack pt={"2"}>
            <CareInput
              id="medicine"
              label="내과"
              count="명"
              onChange={handleCountChange}
            />
            <CareInput
              id="rehabilitation"
              label="재활의학과"
              count="명"
              onChange={handleCountChange}
              s
            />
            <CareInput
              id="family"
              label="가정의학과"
              count="명"
              onChange={handleCountChange}
            />
            <CareInput
              id="neurosurgery"
              label="신경외과"
              count="명"
              onChange={handleCountChange}
            />
            <CareInput
              id="Oriental"
              label="한방내과"
              count="명"
              onChange={handleCountChange}
            />
            <CareInput
              id="bedclothes"
              label="침구과"
              count="명"
              onChange={handleCountChange}
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
              count="명"
              onChange={handleCountChange}
            />
            <CareInput
              id="occupational_therapist"
              label="작업치료사"
              count="명"
              onChange={handleCountChange}
            />
            <CareInput
              id="physical_therapyroom"
              label="물리치료실"
              count="실"
              onChange={handleCountChange}
            />
          </Stack>
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            의료장비
          </Text>
          <Stack pt={"2"}>
            <CareInput
              id="physical_therapist"
              label="장비1"
              count="대"
              onChange={handleCountChange}
              istype
            />
            <CareInput
              id="occupational_therapist"
              label="장비2"
              count="대"
              onChange={handleCountChange}
              istype
            />
            <CareInput
              id="physical_therapyroom"
              label="장비3"
              count="대"
              onChange={handleCountChange}
              istype
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export const Step3 = ({ formData, setFormData }: StepEstimateProps) => {
  const handleCountChange = (label: string, count: number) => {
    setFormData({
      ...formData,
      [label]: count,
    });
  };
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
          <SelectButton
            onChange={(value: any) => {
              setFormData({ ...formData, shelter_program: value });
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
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            요양인력
          </Text>
          <Stack pt={"2"}>
            <CareInput
              id="physical_therapist"
              label="사회복지사"
              count="명"
              onChange={handleCountChange}
            />
            <CareInput
              id="occupational_therapist"
              label="영양사"
              count="명"
              onChange={handleCountChange}
            />
            <CareInput
              id="physical_therapyroom"
              label="조리사"
              count="명"
              onChange={handleCountChange}
            />
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
            onChange={(e: any) => {
              setFormData({ ...formData, shelter_grade: e.target.value });
            }}
            list={["고급형", "일반형", "실속형", "상관없음"]}
          />
        </Stack>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
            침실구성
          </Text>
          <Stack pt={"2"}>
            <CareInput
              id="physical_therapist"
              label="상급병상"
              count="개"
              onChange={handleCountChange}
            />
            <CareInput
              id="occupational_therapist"
              label="일반병상"
              count="개"
              onChange={handleCountChange}
            />
            <CareInput
              id="physical_therapyroom"
              label="격리병상"
              count="개"
              onChange={handleCountChange}
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export const Step4 = ({ formData, setFormData }: StepEstimateProps) => {
  const handleCountChange = (title: string, value: number) => {
    setFormData({ ...formData, [title]: value });
  };
  return (
    <Container alignItems={"center"} py={{ base: "2", md: "4" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <CalculateInput title="입원비" onChange={handleCountChange} />
        <CalculateInput title="식대" onChange={handleCountChange} />
        <CalculateInput title="비급여 상급병상" onChange={handleCountChange} />
        <CalculateInput title="비급여 간병비" onChange={handleCountChange} />
      </Stack>
    </Container>
  );
};
