import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerProps,
  HStack,
  Link,
  Stack,
  VStack,
} from "@chakra-ui/react";
export const MobileDrawer = (props: Omit<DrawerProps, "children">) => (
  <Drawer placement="top" {...props}>
    <DrawerContent>
      <DrawerBody mt="16">
        <Stack spacing="8" justify={"flex-end"}>
          <ButtonGroup size="lg" variant="text" colorScheme="gray" spacing="8">
            <VStack w={"full"} spacing={"4"} p={"4"}>
              <Link href="/login">
                <Button>로그인</Button>
              </Link>
              <Link href="/signup">
                <Button>회원가입</Button>
              </Link>
            </VStack>
          </ButtonGroup>
        </Stack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
