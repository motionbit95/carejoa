import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ToggleButton } from "./ToggleButton";
import { BsChevronLeft } from "react-icons/bs";

export const Topbar = ({ ...props }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const mobileNavbar = useDisclosure();
  const { menu, buttons, isbackstack, navigations, isNav } = props;
  return (
    <Box as="section">
      <Box borderBottomWidth="1px" bg="bg.surface">
        <Container py="4">
          <HStack justify="space-between">
            <HStack>
              {isbackstack && (
                <Icon
                  as={BsChevronLeft}
                  boxSize={{ base: "4", md: "5" }}
                  onClick={() => {
                    localStorage.setItem("menu", "list");
                    window.location.reload();
                  }}
                />
              )}
              <Text fontWeight="bold" fontSize="2xl" color="fg.default">
                {menu}
              </Text>
            </HStack>
            <HStack spacing="8" display={{ base: "none", lg: "block" }}>
              {isNav ? (
                <ButtonGroup size="lg" spacing="4">
                  <Button
                    onClick={() => {
                      localStorage.setItem("menu", navigations[0]);
                      window.location.reload();
                    }}
                    variant="outline"
                  >
                    {buttons[0]}
                  </Button>
                  <Button
                    onClick={() => {
                      localStorage.setItem("menu", navigations[1]);
                      window.location.reload();
                    }}
                  >
                    {buttons[1]}
                  </Button>
                </ButtonGroup>
              ) : (
                <ButtonGroup size="lg" spacing="4">
                  <Button variant="outline">{buttons[0]}</Button>
                  <Button>{buttons[1]}</Button>
                </ButtonGroup>
              )}
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
