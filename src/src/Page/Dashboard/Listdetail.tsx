import {
  Avatar,
  Box,
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
import { Topbar } from "../../Component/TopBar/TopBar";
import { consultingList } from "./data";
import { StepsWithCirclesAndText } from "../../Component/StepsWithCirclesAndText/App";

export const ListDetail = () => {
  return (
    <Box as="section">
      <Topbar
        menu="상담 상세정보"
        buttons={["삭제하기", "수정하기"]}
        isbackstack
      />
      <Stack p={"4"}>
        <Flex
          gap={{ base: "4", md: "6" }}
          w="full"
          flexDir={{ base: "column", lg: "row" }}
          justify="space-between"
        >
          <Stack
            minW={{ base: "full", lg: "700px" }}
            flex={3}
            bgColor={"bg.surface"}
            borderRadius={"xl"}
            shadow={"sm"}
            p={"4"}
          >
            <Stack spacing={6} mb={7}>
              <Box>
                <Tag>작성중</Tag>
              </Box>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                2024년 04월 20일 12:00
              </Text>
              <StepsWithCirclesAndText
                title={[
                  "신청서작성",
                  "상담신청완료",
                  "상담도착",
                  "상담후기작성",
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
                columns={{ base: 1, md: 2, lg: 2 }}
                columnGap={{ base: 2, md: 4 }}
                rowGap={{ base: 2, md: 4 }}
              >
                {consultingList.map(
                  ({ title, place, size, shelter, info, price }) => (
                    <HStack bgColor={"#BEE3F8"} borderRadius={"xl"} p={"4"}>
                      {/* <Image
                      src={require("../../../logo.svg")}
                      borderRadius={50}
                      boxSize={50}
                    /> */}
                      <Avatar />
                      <Stack spacing={1} color={"fg.muted"}>
                        <Text
                          fontWeight={"bold"}
                          fontSize={"lg"}
                          color={"fg.default"}
                        >
                          {title}
                        </Text>
                        <Text>{place}</Text>
                        <Stack
                          direction={{ base: "column", md: "row" }}
                          spacing={{ base: 0, md: 2 }}
                        >
                          <Text>{size}</Text>
                          <Text>{shelter}</Text>
                          <Divider
                            orientation="vertical"
                            h={6}
                            display={{ base: "none", md: "initial" }}
                          />
                          <Text>{info}</Text>
                        </Stack>
                        <Text
                          color={"fg.default"}
                          gap={1}
                          flexDirection={"row"}
                          display={"flex"}
                        >
                          월
                          <strong style={{ color: "#FE6D6A" }}>{price}</strong>
                          원
                        </Text>
                      </Stack>
                    </HStack>
                  )
                )}
              </SimpleGrid>
            </Stack>
          </Stack>
          <UserDetailCard />
        </Flex>
      </Stack>
    </Box>
  );
};

export const UserDetailCard = () => {
  return (
    <Stack
      flex={1}
      minW={{ base: "full", lg: "270px" }}
      bgColor={"bg.surface"}
      borderRadius={"xl"}
      shadow={"sm"}
      p={"6"}
    >
      <Text fontWeight={"bold"} fontSize={"xl"}>
        상담신청정보
      </Text>
      <Stack py={5}>
        <Stack fontSize={"sm"} color={"fg.muted"}>
          <Text fontWeight={"bold"} fontSize={"md"} color={"fg.default"}>
            요양 시설 선택
          </Text>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>상담번호</Text>
            <Text>klL8re94jrEa7JPXhafk</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>요양시설</Text>
            <Text>요양병원</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>지역</Text>
            <Text>서울 광진구</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>시설등급</Text>
            <Text>A등급</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>요양시설 크기</Text>
            <Text>대형</Text>
          </HStack>
        </Stack>
        <Divider />
        <Stack fontSize={"sm"} color={"fg.muted"}>
          <Text fontWeight={"bold"} fontSize={"md"} color={"fg.default"}>
            요양 비용 및 프로그램
          </Text>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>요양비용</Text>
            <Text>고급형</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>요양프로그램</Text>
            <Text>운동보조, 맞춤형 서비스</Text>
          </HStack>
        </Stack>
        <Divider />
        <Stack fontSize={"sm"} color={"fg.muted"}>
          <Text fontWeight={"bold"} fontSize={"md"} color={"fg.default"}>
            환자상태
          </Text>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>어르신 성함</Text>
            <Text>홍길동</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>연세</Text>
            <Text>81세</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>노인장기요양등급</Text>
            <Text>모름</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>자립식사능력</Text>
            <Text>도움없이 가능</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>자립양치능력</Text>
            <Text>도움없이 가능</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>불편한 신체부분</Text>
            <Text>없음</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>앓고있는 질병</Text>
            <Text>없음</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>필요 간병 시간</Text>
            <Text>3시간 이내</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>예상 간병비</Text>
            <Text>월 50~100만원</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>요양시설 경험유무</Text>
            <Text>있음</Text>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};
