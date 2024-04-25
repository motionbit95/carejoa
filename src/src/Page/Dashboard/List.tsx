import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Filter } from "../../Component/Filter";
import { CardList } from "../../Component/CardList/CardList";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ListDetail } from "./Listdetail";
import { useState } from "react";
import { UserList } from "../../Component/CardList/UserList";
import { UserData, consultingList } from "./data";

export const List = ({ ...props }) => {
  const [showDetail, setShowDetail] = useState(false);
  const { userInfo } = props;

  return (
    <Box as="section">
      {!showDetail ? (
        <Stack spacing={0}>
          <Flex align={"center"} px={"4"} py={{ base: "2", md: "4" }}>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
              상담 목록
            </Text>
          </Flex>
          <Filter onFilter={(filter) => console.log(filter)} />
          <Stack px={"4"} py={{ base: "2", md: "4" }}>
            {userInfo.type === "0" && (
              <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4}>
                {consultingList.map((consulting, index) => (
                  <CardList
                    bgColor={index % 2 === 0 ? "#EBF8FF" : "#F5F6F8"}
                    key={index}
                    {...consulting}
                  />
                ))}
              </SimpleGrid>
            )}
            {userInfo.type === "1" && (
              <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4}>
                {UserData.map((user, index) => (
                  <UserList
                    bgColor={index % 2 === 0 ? "#EBF8FF" : "#F5F6F8"}
                    key={index}
                    {...user}
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
        <ListDetail />
      )}
    </Box>
  );
};
