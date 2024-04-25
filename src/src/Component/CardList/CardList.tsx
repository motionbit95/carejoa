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
import { data } from "../../Page/Dashboard/data";
import { MdClose } from "react-icons/md";

const goDetail = () => {
  alert("상세 상담페이지로 이동");
};

export const CardList = ({ ...props }) => {
  const { title, grade, place, call, size, shelter, info } = props;
  return (
    <Card borderRadius={"xl"} onClick={goDetail} {...props}>
      <CardBody p={{ base: "2", md: "4" }}>
        <Flex justify={"space-between"}>
          <HStack>
            <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
              {title}
            </Text>
            <Tag bgColor={"blue.100"} color={"blue.800"}>
              {grade}
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
          <Text>{place}</Text>
          <HStack divider={<StackDivider />}>
            <Text>{call}</Text>
            <HStack>
              <Text>{size}</Text>
              <Text>{shelter}</Text>
            </HStack>

            <Text>{info}</Text>
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
