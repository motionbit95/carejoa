import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SearchFilter } from "../../Component/SearchFilter";
import { BiListUl, BiMapAlt } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

export const Search = () => {
  return (
    <Container maxW={{ base: "full", md: "lg" }} p={{ base: "0", md: "2" }}>
      <Stack>
        <SearchFilter />
        <Tabs variant={"unstyled"}>
          <TabList justifyContent={"flex-end"} px={2}>
            <Tab _selected={{ color: "#3182CE" }} p={2}>
              <BiListUl size={24} />
            </Tab>
            <Tab _selected={{ color: "#3182CE" }} p={2}>
              <BiMapAlt size={24} />
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0} pb={0}>
              <ListTab />
            </TabPanel>
            <TabPanel px={0}>
              <SearchMap />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Container>
  );
};

const ListTab = () => {
  return (
    <Stack>
      <Grid templateColumns="repeat(2, 1fr)" gap={2} px={3}>
        <GridItem alignContent={"center"}>
          <Text fontSize={"lg"}>
            총{" "}
            <Text as="span" color="#3182CE" fontWeight={"bold"}>
              21
            </Text>
            개
          </Text>
        </GridItem>
        <GridItem>
          <Select>
            <option>평가등급순</option>
          </Select>
        </GridItem>
      </Grid>
      <Stack bgColor={"gray.100"}>
        {[1, 2, 3].map((item) => (
          <HospitalList />
        ))}
      </Stack>
    </Stack>
  );
};

export const HospitalList = () => {
  return (
    <HStack bgColor={"white"} spacing={4} p={2}>
      <Box
        boxSize={"80px"}
        bgColor={"gray.300"}
        borderRadius={"lg"}
        position={"relative"}
      >
        <Image />
        <Box position={"absolute"} top={2} right={2}>
          <FaStar color="#FD8606" />
        </Box>
      </Box>
      <Stack flex={"1"} spacing={"1"}>
        <Text fontSize={"md"} fontWeight={"bold"}>
          다나움요양병원
        </Text>
        <Text fontSize={"xs"} color={"rgba(0, 0, 0, 0.5)"}>
          서울특별시 송파구 가락로 278, 지하1층 ~ 지상6층(방이동)
        </Text>

        {TagList.map((item) => (
          <Flex gap={1} wrap={"wrap"} pt={1}>
            <Tag bgColor={"#BEE3F8"} size={"sm"} fontSize={"10px"}>
              {item.grade}
            </Tag>
            <Tag size={"sm"} fontSize={"10px"}>
              {item.size}
            </Tag>
            <Tag size={"sm"} fontSize={"10px"}>
              {item.establishment_date}
            </Tag>
            <Tag size={"sm"} fontSize={"10px"}>
              {item.program}
            </Tag>
            <Tag size={"sm"} fontSize={"10px"}>
              {item.shelter_grade}
            </Tag>
          </Flex>
        ))}
      </Stack>
    </HStack>
  );
};

const TagList = [
  {
    id: 1,
    grade: "1등급",
    size: "소형",
    establishment_date: "설립3년",
    program: "물리치료",
    shelter_grade: "상급병실",
  },
];

const SearchMap = () => {
  return <Box w={"full"} h={"100vh"} bgColor={"gray.100"}></Box>;
};
