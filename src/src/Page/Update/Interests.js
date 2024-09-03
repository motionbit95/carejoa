import { Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { HospitalList } from "./Search";

export const Interests = () => {
  return (
    <Stack spacing={0}>
      <Stack align={"center"} py={{ base: "8", md: "12" }}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          관심 시설
        </Text>
      </Stack>
      <Stack>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <HospitalList />
        ))}
      </Stack>
    </Stack>
  );
};
