import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { MobileDrawer } from "./MobileNavbar";
import { ToggleButton } from "./ToggleButton";

export const Topbar = ({ ...props }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const mobileNavbar = useDisclosure();
  return (
    <Box as="section">
      <Box
        borderBottomWidth="1px"
        bg="bg.surface"
        position="relative"
        zIndex="tooltip"
      >
        <Container py="4">
          <HStack justify="space-between">
            {/* <Logo /> */}
            <Text fontWeight="bold" fontSize="2xl" color="fg.default">
              대시보드
            </Text>
            {isDesktop ? (
              <HStack spacing="8">
                <ButtonGroup size="lg" spacing="4">
                  <Button variant="outline">상담내용 확인</Button>
                  <Button onClick={() => props.onclick("consulting")}>
                    상담 신청하기
                  </Button>
                </ButtonGroup>
              </HStack>
            ) : (
              <>
                <ToggleButton
                  onClick={mobileNavbar.onToggle}
                  isOpen={mobileNavbar.isOpen}
                  aria-label="Open Menu"
                />
                {/* <MobileDrawer
                  isOpen={mobileNavbar.isOpen}
                  onClose={mobileNavbar.onClose}
                /> */}
              </>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
