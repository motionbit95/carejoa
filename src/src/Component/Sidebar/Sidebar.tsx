import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FiBookmark, FiClock, FiGrid, FiPieChart } from "react-icons/fi";
import { Logo } from "./Logo";
import { SidebarButton } from "./SidebarButton";
import { AccountSwitcher } from "./AccountSwitcher";
import {
  MdCalendarToday,
  MdDashboard,
  MdFormatListBulleted,
  MdOutlineSettings,
} from "react-icons/md";
import { useState } from "react";

export const Sidebar = (props: { onclick: (menu: string) => void }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const mobileSidebar = useDisclosure();
  const [menu, setMenu] = useState(
    localStorage.getItem("menu") ? localStorage.getItem("menu") : "home"
  );

  const handleMenu = (menu: string) => {
    setMenu(menu);
    localStorage.setItem("menu", menu);
    props.onclick(menu);
    mobileSidebar.onClose();
  };
  return (
    <Stack bgColor={"#F5F6F8"} minH={"100vh"}>
      <Flex display={{ base: "none", lg: "flex" }} as="section" h={"full"}>
        <Stack
          flex="1"
          w={{ base: "full", sm: "xs" }}
          maxW={{ base: "full", sm: "xs" }}
          py={{ base: "6", sm: "8" }}
          px={{ base: "4", sm: "6" }}
          // bg="bg.surface"
          borderRightWidth="1px"
          justifyContent="space-between"
        >
          <Stack spacing="8">
            <Stack>
              {/* <Logo alignSelf="start" /> */}
              <HStack>
                <Image
                  src={require("../CareJOA.png")}
                  height={"48px"}
                  w={"auto"}
                />
              </HStack>
              <Text opacity={0.5}>함께할 때 더 가치있습니다.</Text>
            </Stack>
            <AccountSwitcher />
            <Stack spacing="1">
              <SidebarButton
                opacity={menu === "home" ? 1 : 0.5}
                leftIcon={<MdDashboard />}
                onClick={() => handleMenu("home")}
              >
                대시보드
              </SidebarButton>
              <SidebarButton
                opacity={menu === "consulting" ? 1 : 0.5}
                leftIcon={<MdCalendarToday />}
                onClick={() => handleMenu("consulting")}
              >
                상담 신청하기
              </SidebarButton>
              <SidebarButton
                opacity={menu === "list" ? 1 : 0.5}
                leftIcon={<MdFormatListBulleted />}
                onClick={() => handleMenu("list")}
              >
                상담 목록
              </SidebarButton>
              <SidebarButton
                opacity={menu === "mypage" ? 1 : 0.5}
                leftIcon={<MdOutlineSettings />}
                onClick={() => handleMenu("mypage")}
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
