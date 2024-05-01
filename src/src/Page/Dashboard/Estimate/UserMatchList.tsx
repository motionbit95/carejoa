import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Stack,
  StackDivider,
  Tag,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { data } from "../data";
import { useState } from "react";

const SendEstimate = (props: any) => {
  // UserMatchList(기관) - 견적서 보내기 버튼 component
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        isCentered
        size="sm"
        // `trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly.
        blockScrollOnMount={false}
        trapFocus={false}
      >
        <ModalOverlay />
        <ModalContent
          bg="bg.surface"
          boxShadow="lg"
          borderRadius="xl"
          p={{ base: "4", sm: "6", md: "8" }}
        >
          <ModalCloseButton />
          <Stack spacing="4">
            <Text fontSize="lg" fontWeight="bold">
              견적서 작성
            </Text>
            <Stack>
              <Text>견적서 선택</Text>
              <Select />
            </Stack>
            <Stack>
              <Text>견적서 선택</Text>
              <Textarea placeholder="견적 내용을 작성해주세요!" />
            </Stack>
            <ButtonGroup justifyContent={"flex-end"}>
              <Button bgColor={"gray.100"} color={"gray.800"}>
                취소
              </Button>
              <Button>견적서 보내기</Button>
            </ButtonGroup>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
};

export const UserMatchList = ({ ...props }) => {
  // List(기관) - 기관이 유저와 매칭된 정보 List Card Component
  const [popupOpen, setPopupOpen] = useState(false);
  const handleModalButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation(); // 모달 버튼 클릭 시 이벤트 전파 중지
    setPopupOpen(true);
  };

  const {
    userName,
    userProfile,
    city,
    dong,
    rank,
    size,
    grade,
    shelter,
    program,
    price,
  } = props;

  return (
    <Card borderRadius={"xl"} {...props}>
      <CardBody p={{ base: "3", md: "4" }}>
        <HStack justify={"space-between"} align={"flex-start"}>
          <HStack align={"center"}>
            <Avatar
              src={userProfile}
              size={{ base: "md", md: "lg" }}
              bgColor={"gray.300"}
            />
            <Stack spacing={0}>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
                {userName}
              </Text>
              <Stack
                spacing={0.5}
                fontSize={{ base: "12px", md: "sm" }}
                color={"fg.muted"}
              >
                <Text>
                  {city} {dong}
                </Text>
                <HStack divider={<StackDivider />}>
                  <HStack>
                    <Text>{size}</Text>
                    <Text>{shelter}</Text>
                  </HStack>
                  <Text>
                    {program[0]} {program[1]} {program[2]}
                  </Text>
                </HStack>
                <HStack divider={<StackDivider />}>
                  <Text>{rank}</Text>
                  <Text>{grade}</Text>
                  <Text>{price}</Text>
                </HStack>
              </Stack>
            </Stack>
          </HStack>
          <ButtonGroup size={"sm"}>
            <Button onClick={handleModalButtonClick}>견적서 보내기</Button>
            <Button bgColor={"gray.100"} color={"gray.500"}>
              견적완료
            </Button>
          </ButtonGroup>
          <SendEstimate
            isOpen={popupOpen}
            onClose={() => setPopupOpen(false)}
          />
        </HStack>
      </CardBody>
    </Card>
  );
};
