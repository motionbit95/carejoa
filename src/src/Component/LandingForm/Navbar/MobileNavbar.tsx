import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerProps,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const MobileDrawer = (props: Omit<DrawerProps, "children">) => (
  <Drawer placement="top" {...props}>
    <DrawerContent>
      <DrawerBody mt="16">
        <HStack spacing="8" justify={"flex-end"}>
          <ButtonGroup size="lg" variant="text" colorScheme="gray" spacing="8">
            <Link to="/login">
              <Button>로그인</Button>
            </Link>
            <Link to="/signup">
              <Button>회원가입</Button>
            </Link>
          </ButtonGroup>
        </HStack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
