import { Divider, Flex, HStack, Stack, Text } from "@chakra-ui/react";

export const UserDetailCard = ({ ...props }) => {
  // ListDetail(유저) - 유저 상세 정보 Component (기관이 가져다 사용할 수 있음)
  return (
    <Stack
      flex={1}
      minW={{ base: "full", lg: "270px" }}
      bgColor={"bg.surface"}
      borderRadius={"xl"}
      shadow={"sm"}
      p={"6"}
    >
      <Flex>
        <Text fontWeight={"bold"} fontSize={"xl"}>
          상담신청정보
        </Text>
      </Flex>
      <Stack py={5}>
        <Stack fontSize={"sm"} color={"fg.muted"}>
          <Text fontWeight={"bold"} fontSize={"md"} color={"fg.default"}>
            요양 시설 선택
          </Text>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>상담번호</Text>
            <Text>klL8re94jrEa7JPXhafk</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>요양시설</Text>
            <Text>요양병원</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>지역</Text>
            <Text>서울 광진구</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>시설등급</Text>
            <Text>A등급</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>요양시설 크기</Text>
            <Text>대형</Text>
          </HStack>
        </Stack>
        <Divider />
        <Stack fontSize={"sm"} color={"fg.muted"}>
          <Text fontWeight={"bold"} fontSize={"md"} color={"fg.default"}>
            요양 비용 및 프로그램
          </Text>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>요양비용</Text>
            <Text>고급형</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>요양프로그램</Text>
            <Text>운동보조, 맞춤형 서비스</Text>
          </HStack>
        </Stack>
        <Divider />
        <Stack fontSize={"sm"} color={"fg.muted"}>
          <Text fontWeight={"bold"} fontSize={"md"} color={"fg.default"}>
            환자상태
          </Text>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>어르신 성함</Text>
            <Text>홍길동</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>연세</Text>
            <Text>81세</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>노인장기요양등급</Text>
            <Text>모름</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>자립식사능력</Text>
            <Text>도움없이 가능</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>자립양치능력</Text>
            <Text>도움없이 가능</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>불편한 신체부분</Text>
            <Text>없음</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>앓고있는 질병</Text>
            <Text>없음</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>필요 간병 시간</Text>
            <Text>3시간 이내</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>예상 간병비</Text>
            <Text>월 50~100만원</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"}>요양시설 경험유무</Text>
            <Text>있음</Text>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};
