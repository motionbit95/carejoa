import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import {
  FiBookmark,
  FiClock,
  FiGrid,
  FiHelpCircle,
  FiMoreVertical,
  FiPieChart,
  FiSearch,
  FiSettings,
} from "react-icons/fi";
import { DocumentCollapse } from "./DocumentCollapse";
import { Logo } from "./Logo";
import { SidebarButton } from "./SidebarButton";
import { AccountSwitcher } from "./AccountSwitcher";
import { useState } from "react";

export const Sidebar = ({ ...props }) => {
  return (
    <Flex as="section" minH="100vh">
      <Stack
        flex="1"
        w={{ base: "full", sm: "xs" }}
        maxW={{ base: "full", sm: "xs" }}
        py={{ base: "6", sm: "8" }}
        px={{ base: "4", sm: "6" }}
        bg="bg.surface"
        borderRightWidth="1px"
        justifyContent="space-between"
      >
        <Stack spacing="8">
          <Stack>
            <Logo alignSelf="start" />
            <Text>함께할 때 더 가치있습니다.</Text>
          </Stack>
          <AccountSwitcher />
          <Stack spacing="1">
            <SidebarButton leftIcon={<FiGrid />}>대시보드</SidebarButton>
            <SidebarButton leftIcon={<FiPieChart />}>
              상담 선택하기
            </SidebarButton>
            {/* <DocumentCollapse /> */}
            <SidebarButton leftIcon={<FiClock />}>상담 목록</SidebarButton>
            <SidebarButton leftIcon={<FiBookmark />}>내정보 관리</SidebarButton>
          </Stack>
        </Stack>
        {/* <Stack spacing="4" divider={<StackDivider />}>
        <Box />
        <Stack spacing="1">
          <SidebarButton leftIcon={<FiHelpCircle />}>Help Center</SidebarButton>
          <SidebarButton leftIcon={<FiSettings />}>Settings</SidebarButton>
        </Stack>
      </Stack> */}
      </Stack>
    </Flex>
  );
};
