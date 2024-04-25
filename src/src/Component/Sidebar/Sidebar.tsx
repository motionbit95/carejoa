import {
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { SidebarButton } from "./SidebarButton";
import { AccountSwitcher } from "./AccountSwitcher";
import {
  MdCalendarToday,
  MdDashboard,
  MdFormatListBulleted,
  MdOutlineSettings,
} from "react-icons/md";
import { useState } from "react";
import { MobileDrawer } from "./MobileSidebar";
import { ToggleButton } from "../TopBar/ToggleButton";

export const Sidebar = (props: {
  onChangeMenu: (menu: string) => void;
  userInfo: any;
}) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const mobileSidebar = useDisclosure();
  const [menu, setMenu] = useState(
    localStorage.getItem("menu") ? localStorage.getItem("menu") : "home"
  );

  const { userInfo } = props;

  console.log("사이드바에서 받았다", userInfo);

  const handleMenu = (menu: string) => {
    setMenu(menu);
    localStorage.setItem("menu", menu);
    props.onChangeMenu(menu);
    mobileSidebar.onClose();
  };
  return (
    <Stack bgColor={"#F5F6F8"}>
      <Flex display={{ base: "none", lg: "flex" }} as="section" minH={"100vh"}>
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
              <HStack>
                <Image
                  src={require("../../asset/CareJOA.png")}
                  height={"48px"}
                  w={"auto"}
                />
              </HStack>
              <Text display={{ base: "none", lg: "block" }} opacity={0.5}>
                함께할 때 더 가치있습니다.
              </Text>
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
              {userInfo.type === "0" && (
                <SidebarButton
                  opacity={menu === "consulting" ? 1 : 0.5}
                  leftIcon={<MdCalendarToday />}
                  onClick={() => handleMenu("consulting")}
                >
                  상담 신청하기
                </SidebarButton>
              )}
              {userInfo.type === "1" && (
                <SidebarButton
                  opacity={menu === "estimate" ? 1 : 0.5}
                  leftIcon={<MdCalendarToday />}
                  onClick={() => handleMenu("estimate")}
                >
                  견적서 관리
                </SidebarButton>
              )}

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
      <Container display={{ base: "Flex", lg: "none" }}>
        <Flex
          p={4}
          width={"100%"}
          justify="space-between"
          align="center"
          borderBottomWidth="1px"
        >
          <Flex align="center" width={"100%"} justify="space-between">
            <HStack>
              <Image
                src={require("../../asset/CareJOA.png")}
                height={"48px"}
                w={"auto"}
              />
            </HStack>
          </Flex>
          <HStack>
            <ToggleButton
              onClick={mobileSidebar.onToggle}
              isOpen={mobileSidebar.isOpen}
              aria-label="Open Menu"
            />
            <MobileDrawer
              handleMenu={handleMenu}
              isOpen={mobileSidebar.isOpen}
              onClose={mobileSidebar.onClose}
            />
          </HStack>
        </Flex>
      </Container>
    </Stack>
  );
};
