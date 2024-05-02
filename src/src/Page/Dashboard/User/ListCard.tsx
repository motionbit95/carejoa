import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  HStack,
  Icon,
  IconButton,
  Stack,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { deleteDocument } from "../../../Firebase/Database";

export const ListCard = ({ ...props }) => {
  // List(유저) - 상담 신청작성 후 생성된 리스트 Component
  const {
    uid = "",
    createdAt = "",
    grade = "",
    city = "",
    dong = "",
    size = "",
    shelter = "",
    program = "",
  } = props;

  // 작성중, 상담완료 태그 일때만 삭제 가능하게. 상담신청완료, 상담도착, 상담후기작성에서는 삭제 불가능
  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (window.confirm("삭제하시겠습니까?")) {
      await deleteDocument("consulting", props.id);
      window.location.reload();
    }
  };

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
            <Button
              onClick={(e) => {
                e.stopPropagation();
                alert("수정하시겠습니까?");
              }}
              bgColor={"gray.100"}
              color={"gray.500"}
            >
              수정하기
            </Button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                alert("삭제하시겠습니까?");
              }}
            >
              삭제하기
            </Button>
          </ButtonGroup>
        </Stack>
      </CardBody>
    </Card>
  );
};
