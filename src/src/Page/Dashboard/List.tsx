import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Filter } from "../../Component/Filter";
import { ConsultingList } from "../../ConsultingList";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const List = () => (
  <Box as="section">
    <Container py={{ base: "2", md: "4" }}>
      <Heading size={{ base: "sm", md: "sm" }}>상담목록</Heading>
    </Container>
    <Filter onFilter={(filter) => console.log(filter)} />
    <Container py={{ base: "4", md: "8" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <ConsultingList />
        </Stack>
      </Stack>
      <Flex p={3} gap={3}>
        <Icon as={BsChevronLeft} boxSize={{ base: "4", md: "6" }} />
        <Text>1</Text>
        <Icon as={BsChevronRight} boxSize={{ base: "4", md: "6" }} />
      </Flex>
    </Container>
  </Box>
);
