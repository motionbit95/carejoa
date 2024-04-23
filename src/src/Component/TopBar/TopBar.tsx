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
import { ToggleButton } from "./ToggleButton";

export const Topbar = ({ ...props }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const mobileNavbar = useDisclosure();
  return (
    <Box as="section">
      <Box borderBottomWidth="1px" bg="bg.surface">
        <Container py="4">
          <HStack justify="space-between">
            {/* <Logo /> */}
            <Text fontWeight="bold" fontSize="2xl" color="fg.default">
              대시보드
            </Text>
            <HStack spacing="8" display={{ base: "none", lg: "block" }}>
              <ButtonGroup size="lg" spacing="4">
                <Button variant="outline">상담내용 확인</Button>
                <Button onClick={() => props.onclick("consulting")}>
                  상담 신청하기
                </Button>
              </ButtonGroup>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
