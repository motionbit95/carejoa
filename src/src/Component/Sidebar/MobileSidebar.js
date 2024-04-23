import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Image,
  Stack,
} from "@chakra-ui/react";
import { SidebarButton } from "./SidebarButton";

export const MobileDrawer = (props) => {
  return (
    <Drawer placement="left" {...props}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0}>
            <DrawerCloseButton />
            <DrawerHeader py={4}>
              <Image
                src={require("../../asset/CareJOA.png")}
                height={"48px"}
                w={"auto"}
              />
            </DrawerHeader>
            <Stack spacing="1" mt={12}>
              <SidebarButton onClick={() => props.handleMenu("home")}>
                대시보드
              </SidebarButton>
              <SidebarButton onClick={() => props.handleMenu("consulting")}>
                상담 신청하기
              </SidebarButton>
              <SidebarButton onClick={() => props.handleMenu("list")}>
                상담 목록
              </SidebarButton>
              <SidebarButton onClick={() => props.handleMenu("mypage")}>
                내정보 관리
              </SidebarButton>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
