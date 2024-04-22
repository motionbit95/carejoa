import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Home } from "./Home";
import { Consulting } from "./Consulting";
import { List } from "./List";
import { Mypage } from "./Mypage";
import { Sidebar } from "../../Component/Sidebar/Sidebar";

function Dashboard(props) {
  const [selectedMenu, setSelectedMenu] = useState("consulting");
  return (
    <Flex h="full">
      <Sidebar onclick={(menu) => setSelectedMenu(menu)} />
      <Box bgColor={"bg.surface"} flex="1" overflow="auto">
        {selectedMenu === "home" && (
          <Home onclick={(menu) => setSelectedMenu(menu)} />
        )}
        {selectedMenu === "consulting" && <Consulting />}
        {selectedMenu === "list" && <List />}
        {selectedMenu === "mypage" && <Mypage />}
      </Box>
    </Flex>
  );
}
export default Dashboard;
