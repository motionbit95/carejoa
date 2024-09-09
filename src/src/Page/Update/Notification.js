import {
  Accordion,
  AccordionItem,
  Container,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const Notification = () => {
  return (
    <Container maxW={{ base: "full", md: "lg" }} p={{ base: "0", md: "2" }}>
      <Stack spacing={0}>
        <Stack align={"center"} py={{ base: "8", md: "12" }} w={"full"}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            공지사항
          </Text>
          <Stack
            borderY={"1px"}
            borderColor={"gray.200"}
            divider={<StackDivider />}
            spacing="0"
            w={"full"}
          >
            <HStack w={"full"}>
              <Text>제목</Text>
              <Text>작성일</Text>
            </HStack>
            <HStack>
              <Text>제목</Text>
              <Text>작성일</Text>
            </HStack>
          </Stack>
          {/* <Accordion allowToggle>
          <AccordionItem></AccordionItem>
        </Accordion> */}
        </Stack>
      </Stack>
    </Container>
  );
};
