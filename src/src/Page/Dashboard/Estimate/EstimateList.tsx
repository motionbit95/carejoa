import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react";
import { data } from "../data";
import { MdClose } from "react-icons/md";

export const EstimateList = ({ ...props }) => {
  // Estimate(기관) 견적서관리 - 견적서 리스트
  const {
    shelter_name,
    shelter_address,
    shelter_grade,
    shelter_size,
    shelter_rank,
    shelter_tel,
    shelter_program,
  } = props;
  return (
    <Card borderRadius={"xl"} {...props}>
      <CardBody p={{ base: "2", md: "4" }}>
        <Flex justify={"space-between"}>
          <HStack>
            <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
              {shelter_name}
            </Text>
            <Tag bgColor={"blue.100"} color={"blue.800"}>
              {shelter_grade}
            </Tag>
          </HStack>
          <Icon as={MdClose} boxSize={6} />
        </Flex>
        <Stack
          spacing={0.5}
          fontSize={{ base: "12px", md: "sm" }}
          py={2}
          color={"fg.muted"}
        >
          <HStack divider={<StackDivider />}>
            <Text>주소</Text>
          </HStack>
          <HStack divider={<StackDivider />}>
            <Text>{shelter_tel}</Text>
            {/* <Text>크기 {shelter_size}</Text> */}
            {/* <Text>랭크 {shelter_rank}</Text> */}
            <Text>
              {shelter_program[0]} {shelter_program[1]} {shelter_program[2]}
            </Text>
          </HStack>
        </Stack>
        <Stack align={"end"}>
          <ButtonGroup p={{ base: "1", md: "2" }}>
            <Button bgColor={"gray.100"} color={"gray.500"}>
              수정하기
            </Button>
            <Button>복사하기</Button>
          </ButtonGroup>
        </Stack>
      </CardBody>
    </Card>
  );
};
