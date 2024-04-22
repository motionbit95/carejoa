import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { StepsWithAccent } from "../../../Application/ProgressSteps/StepsWithAccent/App";
import { useState } from "react";
import { RadioCardGroupContainer } from "../../Component/RadioCardGroup/App";
import { RadioButtonGroupContainer } from "../../Component/RadioButtonGroup/App";

export const Consulting = () => {
  return (
    <Box as="section" bg="bg.surface">
      <StepsWithAccent />
      <Step1 />
    </Box>
  );
};

export const Step1 = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

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
      <Stack py={{ base: "2", md: "4" }} align="center">
        <Button colorScheme="blue" size={"lg"}>
          저장하고 다음단계로
        </Button>
      </Stack>
    </Container>
  );
};
