import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ToggleButton } from "./ToggleButton";
import { BsChevronLeft } from "react-icons/bs";
import { deleteDocument } from "../../Firebase/Database";

export const Topbar = ({ ...props }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const mobileNavbar = useDisclosure();
  const { menu, buttons, isbackstack, navigations, isNav } = props;

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (window.confirm("삭제하시겠습니까?")) {
      if (
        window.confirm("정말로 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")
      ) {
        await deleteDocument("consulting", props.id);
        window.location.reload();
      }
    }
  };

  return (
    <Box as="section">
      <Box borderBottomWidth="1px" bg="bg.surface">
        <Stack p="4">
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
                  <Button onClick={handleDelete} variant="outline">
                    {buttons[0]}
                  </Button>
                  <Button onClick={props.onclick}>{buttons[1]}</Button>
                </ButtonGroup>
              )}
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};
