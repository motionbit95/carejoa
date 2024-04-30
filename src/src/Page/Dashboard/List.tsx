import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Filter } from "../../Component/Filter";
import { ListCard } from "./User/ListCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ListDetail } from "./User/Listdetail";
import { useEffect, useState } from "react";
import { UserData } from "./data";
import { searchDocument } from "../../Firebase/Database";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../Firebase/Config";
import { UserDetailCard } from "./User/UserDetailCard";
import { UserMatchList } from "./Estimate/UserMatchList";

export const List = ({ ...props }) => {
  // List 페이지 - 유저와 기관 데이터 가져와서 사용
  const [consultingDetail, setConsultingDetail] = useState(false);
  const [userDetail, setUserDetail] = useState(false);

  const { userInfo } = props;
  const [consultingList, setConsultingList] = useState<any>([]);

  useEffect(() => {
    if (userInfo) {
      console.log("uid ============>", userInfo.id);
      const q = query(
        collection(db, "consulting"),
        where("uid", "==", userInfo.id)
      );

      searchDocument(q).then(async (data) => {
        console.log("상담 목록", data);
        setConsultingList(data);
      });
    }
  }, [userInfo]);

  return (
    <Box as="section">
      {!consultingDetail && !userDetail ? (
        <Stack spacing={0}>
          <Flex align={"center"} px={"4"} py={{ base: "2", md: "4" }}>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              상담 목록
            </Text>
          </Flex>
          <Filter onFilter={(filter) => console.log(filter)} />
          <Stack px={"4"} py={{ base: "2", md: "4" }}>
            {userInfo?.type === "0" && (
              <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4}>
                {consultingList &&
                  consultingList?.map((consulting: any, index: number) => (
                    <ListCard
                      bgColor={index % 2 === 0 ? "#EBF8FF" : "#F5F6F8"}
                      key={index}
                      {...consulting}
                      onClick={() => setConsultingDetail(true)}
                    />
                  ))}
              </SimpleGrid>
            )}
            {userInfo?.type === "1" && (
              <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4}>
                {UserData.map((user, index) => (
                  <UserMatchList
                    bgColor={index % 2 === 0 ? "#EBF8FF" : "#F5F6F8"}
                    key={index}
                    {...user}
                    onClick={() => setUserDetail(true)}
                  />
                ))}
              </SimpleGrid>
            )}
            <Flex p={3} gap={6} alignItems={"center"}>
              <Icon
                cursor={"pointer"}
                as={BsChevronLeft}
                boxSize={{ base: "3", md: "4" }}
              />
              <Text>1</Text>
              <Icon
                cursor={"pointer"}
                as={BsChevronRight}
                boxSize={{ base: "3", md: "4" }}
              />
            </Flex>
          </Stack>
        </Stack>
      ) : (
        <>
          {consultingDetail && (
            // 나의 상세 상담 정보로 이동
            <ListDetail />
          )}
          {userDetail && (
            <>
              <Flex p={2} justify={"end"}>
                <Button
                  variant={"none"}
                  leftIcon={<Icon as={BsChevronLeft} />}
                  onClick={() => {
                    localStorage.setItem("menu", "list");
                    window.location.reload();
                  }}
                >
                  뒤로가기
                </Button>
              </Flex>
              {/* 유저 상세 정보로 이동 */}
              <UserDetailCard />
            </>
          )}
        </>
        // <ListDetail />
      )}
    </Box>
  );
};
