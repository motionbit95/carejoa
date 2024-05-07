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
import { useEffect, useState } from "react";
import { searchDocument, updateDocument } from "../../../Firebase/Database";
import { collection, query, updateDoc, where } from "firebase/firestore";
import { auth, db } from "../../../Firebase/Config";

const SendEstimate = (props: any) => {
  const [estimate, setEstimate] = useState<any>();
  // UserMatchList(기관) - 견적서 보내기 버튼 component
  const handleSendEstimate = () => {
    if (window.confirm("견적서를 보내시겠습니까?")) {
      props.onSubmit(estimate);
      props.onClose();
      props.setShowButton(true);
    }
  };

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

              <Select
                placeholder="견적서를 선택해주세요!"
                onChange={(e) => setEstimate(e.target.value)}
              >
                {props.estimateList.map((estimate: any) => (
                  <option key={estimate.id} value={estimate.id}>
                    {estimate.shelter_name}
                  </option>
                ))}
              </Select>
            </Stack>
            {/* <Stack>
              <Text>견적서 내용</Text>
              <Textarea placeholder="견적 내용을 작성해주세요!" />
            </Stack> */}
            <ButtonGroup justifyContent={"flex-end"}>
              <Button
                onClick={props.onClose}
                bgColor={"gray.100"}
                color={"gray.800"}
              >
                취소
              </Button>
              <Button onClick={handleSendEstimate}>견적서 보내기</Button>
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
  const [showButton, setShowButton] = useState(false);
  const [estimateList, setEstimateList] = useState<any>([]);
  const handleModalButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation(); // 모달 버튼 클릭 시 이벤트 전파 중지
    setPopupOpen(true);
  };

  const {
    userName = "",
    userprofile = "",
    city = "",
    dong = "",
    rank = "",
    size = "",
    grade = "",
    shelter = "",
    program = "",
    price = "",
    estimate = [],
  } = props;

  useEffect(() => {
    const q = query(
      collection(db, "estimate"),
      where("uid", "==", auth.currentUser?.uid)
    );

    searchDocument(q).then((data: any) => {
      setEstimateList(data);
    });
  }, []);

  const handleSubmit = (eid: string) => {
    console.log(eid, props.id);
    if (props.estimate) {
      updateDocument("consulting", props.id, {
        estimate: [...props.estimate, eid],
      });
    } else {
      updateDocument("consulting", props.id, { estimate: [eid] });
    }
  };

  useEffect(() => {
    estimateList.map((element: any) => {
      console.log("estimate", estimate, element.id);
      if (estimate?.includes(element.id)) {
        console.log("already");
        setShowButton(true);
      }
    });
  }, [estimateList]);

  return (
    <Card borderRadius={"xl"} {...props}>
      <CardBody p={{ base: "3", md: "4" }}>
        <HStack justify={"space-between"} align={"flex-start"}>
          <HStack align={"center"}>
            <Avatar
              src={userprofile ? userprofile : ""}
              size={{ base: "md", md: "lg" }}
              bgColor={"gray.300"}
            />
            <Stack spacing={0}>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
                {userName}
              </Text>
              <Stack spacing={0.5} fontSize={{ base: "12px", md: "sm" }}>
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
            {/* 상태 가져오기(견적서 전송 여부) */}
            {!showButton && (
              <Button onClick={handleModalButtonClick}>견적서 보내기</Button>
            )}
            {showButton && (
              <Button bgColor={"gray.100"} color={"gray.500"}>
                견적완료
              </Button>
            )}
          </ButtonGroup>
          <SendEstimate
            estimateList={estimateList}
            onSubmit={(eid: string) => {
              handleSubmit(eid);
              setPopupOpen(false);
            }}
            isOpen={popupOpen}
            onClose={() => setPopupOpen(false)}
            setShowButton={setShowButton}
          />
        </HStack>
      </CardBody>
    </Card>
  );
};
