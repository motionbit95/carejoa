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
import { ConsultingList } from "../../Component/ConsultingList";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ListDetail } from "./Listdetail";
import { useState } from "react";

export const List = ({ ...props }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <Box as="section">
      {!showDetail ? (
        <Stack>
          <Container py={{ base: "2", md: "4" }}>
            <Heading size={{ base: "sm", md: "sm" }}>상담목록</Heading>
          </Container>
          <Filter onFilter={(filter) => console.log(filter)} />
          <Container py={{ base: "4", md: "8" }} pt={{ base: "0", md: "2" }}>
            <Stack spacing={{ base: "3", md: "6" }}>
              <Stack
                p={{ base: "2", md: "4" }}
                borderRadius={"xl"}
                shadow={"sm"}
              >
                <ConsultingList onClick={() => setShowDetail(true)} />
              </Stack>
            </Stack>
            <Flex p={3} gap={6} alignItems={"center"}>
              <Icon
                cursor={"pointer"}
                as={BsChevronLeft}
                boxSize={{ base: "3", md: "4" }}
              />
              <Text>1</Text>
              <Icon
                cursor={"pointer"}
                as={BsChevronRight}
                boxSize={{ base: "3", md: "4" }}
              />
            </Flex>
          </Container>
        </Stack>
      ) : (
        <ListDetail />
      )}
    </Box>
  );
};
