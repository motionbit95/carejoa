import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Stack,
  StackDivider,
  Tag,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { deleteDocument } from "../../../Firebase/Database";
import { useState } from "react";

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
    state = 0,
  } = props;

  // 작성중, 상담완료 태그 일때만 삭제 가능하게. 상담신청완료, 상담도착, 상담후기작성에서는 삭제 불가능
  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (window.confirm("삭제하시겠습니까?")) {
      if (
        window.confirm("정말로 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")
      ) {
        await deleteDocument("consulting", props.id);
        window.location.reload();
      }
    }
  };

  const [tagState, setTagState] = useState(state);

  return (
    <Card borderRadius={"xl"} {...props}>
      <CardBody p={{ base: "2", md: "4" }}>
        <Flex justify={"space-between"}>
          <HStack>
            {/* <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
              {uid}
            </Text> */}
            {/* 신청서를 작성중 일 때 작성중, 신청서 완료시 신청완료, 견적 및 상담 받았을 때 상담완료 태그 */}
            {tagState === 0 ? (
              <Tag colorScheme="red">작성중</Tag>
            ) : tagState === 1 ? (
              <Tag colorScheme="blue">신청완료</Tag>
            ) : tagState === 2 ? (
              <Tag colorScheme="green">상담완료</Tag>
            ) : (
              <Tag colorScheme="yellow">삭제된 상담입니다</Tag>
            )}
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
          <Wrap align={"center"}>
            <Text>{grade}</Text>
            <Divider orientation="vertical" h={4} />
            <Text>{size}</Text>
            <Divider orientation="vertical" h={4} />
            <Text>{shelter}</Text>
            <Divider orientation="vertical" h={4} />
            <Text>
              {program[0]} {program[1]} {program[2]}
            </Text>
          </Wrap>
        </Stack>
        <Stack align={"end"}>
          <ButtonGroup p={{ base: "1", md: "2" }}>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                alert("수정하시겠습니까?");
                props.onModify();
              }}
              bgColor={"gray.100"}
              color={"gray.500"}
            >
              수정하기
            </Button>
            <Button
              onClick={
                handleDelete
                //   (e) => {
                //   e.stopPropagation();
                //   alert("삭제하시겠습니까?");
                // }
              }
            >
              삭제하기
            </Button>
          </ButtonGroup>
        </Stack>
      </CardBody>
    </Card>
  );
};
