import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MobileDrawer } from "./MobileNavbar";
import { ToggleButton } from "./ToggleButton";
import { FiSearch } from "react-icons/fi";

export const Navbar = ({ ...props }) => {
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
            <Image
              onClick={() => (window.location.href = "/")}
              height={"48px"}
              src={require("../../../asset/CareJOA.png")}
            />
            {isDesktop ? (
              <HStack spacing="12">
                <ButtonGroup
                  size="lg"
                  variant="text"
                  colorScheme="gray"
                  spacing="4"
                >
                  <Link href="/interests">
                    <Button>관심시설</Button>
                  </Link>
                  <Link href="/notification">
                    <Button>공지사항</Button>
                  </Link>
                </ButtonGroup>
                <ButtonGroup
                  size="lg"
                  variant="text"
                  colorScheme="gray"
                  spacing="4"
                >
                  <Link href="/login">
                    <Button>로그인</Button>
                  </Link>
                  <Link href="/signup">
                    <Button>회원가입</Button>
                  </Link>
                </ButtonGroup>
              </HStack>
            ) : (
              <HStack>
                <IconButton
                  aria-label="Search Button"
                  icon={<FiSearch />}
                  variant={"tertiary"}
                  onClick={() => (window.location.href = "/search")}
                />
                <ToggleButton
                  onClick={mobileNavbar.onToggle}
                  isOpen={mobileNavbar.isOpen}
                  aria-label="Open Menu"
                />
                <MobileDrawer
                  isOpen={mobileNavbar.isOpen}
                  onClose={mobileNavbar.onClose}
                />
              </HStack>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
