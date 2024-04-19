import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AccountSwitcher } from "../../Component/Sidebar/AccountSwitcher";
import { NavItem } from "../../Component/Sidebar/NavItem";
import { BiHome } from "react-icons/bi";
import { Home } from "./Home";
import { Consulting } from "./Consulting";
import { List } from "./List";
import { Mypage } from "./Mypage";

function Dashboard(props) {
  const [selectedMenu, setSelectedMenu] = useState("list");
  return (
    <Flex h="full">
      <Box w="72" h="100vh" bg="#F5F6F8" fontSize="sm">
        <Stack h="full" direction="column" px="4" py="4" spacing="8">
          <Stack>
            <Heading size="md">LOGO</Heading>
            <Text>함께할떄 더 가치있습니다.</Text>
          </Stack>
          <AccountSwitcher />
          <Stack spacing="8" flex="1" overflow="auto">
            <Stack spacing="1">
              <NavItem
                active={selectedMenu === "home"}
                onClick={() => setSelectedMenu("home")}
                icon={<BiHome />}
                label="대시보드"
              />
              <NavItem
                active={selectedMenu === "consulting"}
                onClick={() => setSelectedMenu("consulting")}
                icon={<BiHome />}
                label="상담 선택하기"
              />
              <NavItem
                active={selectedMenu === "list"}
                onClick={() => setSelectedMenu("list")}
                icon={<BiHome />}
                label="상담 목록"
              />
              <NavItem
                active={selectedMenu === "mypage"}
                onClick={() => setSelectedMenu("mypage")}
                icon={<BiHome />}
                label="내정보 관리"
              />
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box bg={mode("white", "gray.800")} flex="1" overflow="auto">
        {selectedMenu === "home" && <Home />}
        {selectedMenu === "consulting" && <Consulting />}
        {selectedMenu === "list" && <List />}
        {selectedMenu === "mypage" && <Mypage />}
      </Box>
    </Flex>
  );
}
export default Dashboard;
