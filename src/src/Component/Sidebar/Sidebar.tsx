import {
  Box,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FiBookmark, FiClock, FiGrid, FiPieChart } from "react-icons/fi";
import { Logo } from "./Logo";
import { SidebarButton } from "./SidebarButton";
import { AccountSwitcher } from "./AccountSwitcher";

export const Sidebar = (props: { onclick: (menu: string) => void }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const mobileSidebar = useDisclosure();
  return (
    <Stack>
      <Flex display={{ base: "none", lg: "flex" }} as="section" h={"full"}>
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
              <SidebarButton
                leftIcon={<FiGrid />}
                onClick={() => props.onclick("home")}
              >
                대시보드
              </SidebarButton>
              <SidebarButton
                leftIcon={<FiPieChart />}
                onClick={() => props.onclick("consulting")}
              >
                상담 선택하기
              </SidebarButton>
              <SidebarButton
                leftIcon={<FiClock />}
                onClick={() => props.onclick("list")}
              >
                상담 목록
              </SidebarButton>
              <SidebarButton
                leftIcon={<FiBookmark />}
                onClick={() => props.onclick("mypage")}
              >
                내정보 관리
              </SidebarButton>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
      <Flex display={{ base: "flex", lg: "none" }} as="section" w={"full"}>
        <Text>모바일 사이드바입니다.</Text>
      </Flex>
    </Stack>
  );
};
