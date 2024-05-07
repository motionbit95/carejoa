import {
  Avatar,
  Divider,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";

export const MatchCounsultingList = ({ ...props }) => {
  // UserDetail(유저) - 유저와 기관이 상담 매칭하는 리스트 Component
  const {
    shelter_name,
    street,
    address,
    shelter_size,
    shelter_grade,
    shelter_specialization,
    입원비,
    식대,
  } = props;
  return (
    <HStack bgColor={"#BEE3F8"} borderRadius={"xl"} p={"4"}>
      {/* <Avatar /> */}
      <Stack spacing={1} color={"fg.muted"}>
        {/* 병원명 */}
        <Text fontWeight={"bold"} fontSize={"lg"} color={"fg.default"}>
          {shelter_name}
        </Text>
        {/* 병원주소 */}
        <Text>
          {street} {address}
        </Text>
        <Wrap
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 0, md: 2 }}
        >
          <HStack>
            {/* 병원 크기 */}
            <Text fontSize={"sm"}>{shelter_size}</Text>
            {/* 병원 종류 */}
            <Text fontSize={"sm"}>{shelter_grade}</Text>
            <Divider
              orientation="vertical"
              h={6}
              display={{ base: "none", md: "initial" }}
            />
            {/* 병원 정보 */}
            <Text fontSize={"sm"}>{shelter_specialization}</Text>
          </HStack>
        </Wrap>
        <Text
          color={"fg.default"}
          gap={1}
          flexDirection={"row"}
          display={"flex"}
        >
          {/* 병원 요금 */}월
          <strong style={{ color: "#FE6D6A" }}>{입원비 + 식대}</strong>원
        </Text>
      </Stack>
    </HStack>
  );
};
