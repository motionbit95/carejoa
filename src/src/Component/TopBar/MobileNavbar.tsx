import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerProps,
  HStack,
} from "@chakra-ui/react";

export const MobileDrawer = (props: Omit<DrawerProps, "children">) => (
  <Drawer placement="top" {...props}>
    <DrawerContent>
      <DrawerBody mt="16">
        <HStack spacing="8" justify={"flex-end"}>
          <ButtonGroup size="lg" variant="text" colorScheme="gray" spacing="8">
            <Button>로그인</Button>
            <Button>회원가입</Button>
          </ButtonGroup>
        </HStack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
