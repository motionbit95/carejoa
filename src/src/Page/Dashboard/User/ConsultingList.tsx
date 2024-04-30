import { Avatar, Divider, HStack, Stack, Text } from "@chakra-ui/react";

export const ConsultingList = ({ ...props }) => {
  // UserDetail(유저) - 유저와 기관이 상담 매칭하는 리스트 Component
  const { title, place, size, shelter, info, price } = props;
  return (
    <HStack bgColor={"#BEE3F8"} borderRadius={"xl"} p={"4"}>
      <Avatar />
      <Stack spacing={1} color={"fg.muted"}>
        {/* 병원명 */}
        <Text fontWeight={"bold"} fontSize={"lg"} color={"fg.default"}>
          {title}
        </Text>
        {/* 병원주소 */}
        <Text>{place}</Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 0, md: 2 }}
        >
          {/* 병원 크기 */}
          <Text>{size}</Text>
          {/* 병원 종류 */}
          <Text>{shelter}</Text>
          <Divider
            orientation="vertical"
            h={6}
            display={{ base: "none", md: "initial" }}
          />
          {/* 병원 정보 */}
          <Text>{info}</Text>
        </Stack>
        <Text
          color={"fg.default"}
          gap={1}
          flexDirection={"row"}
          display={"flex"}
        >
          {/* 병원 요금 */}월
          <strong style={{ color: "#FE6D6A" }}>{price}</strong>원
        </Text>
      </Stack>
    </HStack>
  );
};
