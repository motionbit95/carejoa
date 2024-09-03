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
          <TabPanel px={0}>
            <ListTab />
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
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
    <HStack bgColor={"white"} p={3}>
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
      <Stack>
        <Text fontSize={"lg"}>다나움요양병원</Text>
        <Text fontSize={"sm"}>
          서울특별시 송파구 가락로 278, 지하1층 ~ 지상6층(방이동)
        </Text>
        <Flex gap={2} wrap={"wrap"}>
          <Tag size={"sm"}>1등급</Tag>
          <Tag size={"sm"}>소형</Tag>
          <Tag size={"sm"}>설립3년</Tag>
          <Tag size={"sm"}>물리치료</Tag>
          <Tag size={"sm"}>상급병실</Tag>
        </Flex>
      </Stack>
    </HStack>
  );
};
