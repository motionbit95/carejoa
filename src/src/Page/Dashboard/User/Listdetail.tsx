import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Topbar } from "../../../Component/TopBar/TopBar";
// import { consultingList } from "../data";
import { StepsWithCirclesAndText } from "../../../Component/StepsWithCirclesAndText/App";
import { useEffect, useState } from "react";
import { MatchCounsultingList } from "./MatchConsultingList";
import { UserDetailCard } from "./UserDetailCard";
import { getDocument } from "../../../Firebase/Database";

export const ListDetail = ({ ...props }) => {
  // List(유저) - 상담 리스트 클릭시 보이는 상세정보 Component

  const [consultingList, setConsultingList] = useState<any>([]);
  const [tagState, setTagState] = useState(props.state);

  useEffect(() => {
    let list: any[] = [];
    props.estimate?.map((data: any) => {
      console.log(data);
      getDocument("estimate", data).then((estimate) => {
        list.push(estimate);
        setConsultingList(list);
      });
    });
  }, []);
  return (
    <Box as="section">
      <Topbar
        menu="상담 상세정보"
        buttons={["삭제하기", "수정하기"]}
        isbackstack
        onclick={props.onclick}
      />
      <Stack p={"4"}>
        <Flex
          gap={{ base: "4", md: "6" }}
          w="full"
          flexDir={{ base: "column", lg: "row" }}
          justify="space-between"
        >
          <Stack
            // minW={{ base: "full", lg: "700px" }}
            flex={3}
            bgColor={"bg.surface"}
            borderRadius={"xl"}
            shadow={"sm"}
            p={"4"}
          >
            <Stack spacing={6} mb={7}>
              <Box>
                {tagState === 0 ? (
                  <Tag colorScheme="red">작성중</Tag>
                ) : tagState === 1 ? (
                  <Tag colorScheme="blue">신청완료</Tag>
                ) : tagState === 2 ? (
                  <Tag colorScheme="green">상담완료</Tag>
                ) : (
                  <Tag colorScheme="yellow">삭제된 상담입니다</Tag>
                )}
              </Box>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                {props.createdAt.toDate().toLocaleDateString()}
              </Text>
              <StepsWithCirclesAndText
                currentStep={tagState + 1}
                title={[
                  "신청서작성",
                  "상담신청완료",
                  // "상담도착",
                  // "상담후기작성",
                  "상담완료",
                ]}
              />
            </Stack>
            <Divider />
            <Stack spacing={4} py={2}>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                상담내역
              </Text>
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                columnGap={{ base: 2, md: 4 }}
                rowGap={{ base: 2, md: 4 }}
              >
                {/* 병원 상담 내역 */}
                {consultingList.map(({ ...props }) => (
                  <MatchCounsultingList {...props} />
                ))}
              </SimpleGrid>
            </Stack>
          </Stack>
          <UserDetailCard {...props} />
        </Flex>
      </Stack>
    </Box>
  );
};
