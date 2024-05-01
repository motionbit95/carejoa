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

export const ListCard = ({ ...props }) => {
  // List(유저) - 상담 신청작성 후 생성된 리스트 Component
  const { uid, createdAt, grade, city, dong, size, shelter, program } = props;

  return (
    <Card borderRadius={"xl"} {...props}>
      <CardBody p={{ base: "2", md: "4" }}>
        <Flex justify={"space-between"}>
          <HStack>
            {/* <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
              {uid}
            </Text> */}
            <Tag bgColor={"blue.100"} color={"blue.800"}>
              작성중
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
            {/* <Text>신청일</Text> */}
            <Text>{createdAt.toDate().toLocaleDateString()}</Text>
            <Text>
              {city} {dong}
            </Text>
          </HStack>
          <HStack divider={<StackDivider />}>
            <Text>{grade}</Text>
            <Text>{size}</Text>
            <Text>{shelter}</Text>
            <Text>
              {program[0]} {program[1]} {program[2]}
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
