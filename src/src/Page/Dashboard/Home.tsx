import {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Topbar } from "../../Component/TopBar/TopBar";
import { consultingList } from "./data";

export const Home = () => (
  // 대시보드 메인페이지
  <Box as="section">
    <Topbar
      menu="대시보드"
      buttons={["상담내용 확인", "상담 신청하기"]}
      navigations={["list", "consulting"]}
      isNav
    />
    <Stack px={"4"} py={{ base: "4", md: "8" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          borderRadius={"xl"}
          shadow={"sm"}
        >
          <Stack justify={"center"} spacing={{ base: "2", md: "4" }} p="4">
            <Heading size={{ base: "sm", md: "md" }}>
              안녕하세요, 케어조아님
            </Heading>
            <Stack spacing="0" opacity={0.5}>
              <Text>케어조아에 오신 것을 환영합니다.</Text>
              <Text>
                케어조아에서 당신의 건강과 안녕에 대한 첫걸음을 내딛어보세요.
              </Text>
            </Stack>
            <ButtonGroup size="lg" spacing="4">
              <Button
                onClick={() => {
                  localStorage.setItem("menu", "list");
                  window.location.reload();
                }}
                variant="outline"
              >
                상담내용 확인
              </Button>
              <Button
                onClick={() => {
                  localStorage.setItem("menu", "consulting");
                  window.location.reload();
                }}
              >
                상담 신청하기
              </Button>
            </ButtonGroup>
          </Stack>
          <AspectRatio ratio={3}>
            <Image
              // borderRadius={"2xl"}
              objectFit="cover"
              src={require("../../asset/image1.png")}
              alt="Lady at work"
            />
          </AspectRatio>
        </SimpleGrid>
        <Stack
          p={{ base: "2", md: "4" }}
          borderRadius={"xl"}
          shadow={"sm"}
          spacing={{ base: "3", md: "6" }}
        >
          {/* 수정필요 */}
          <Heading size={"xs"}>최근에 신청한 상담</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {/* {consultingList.map((consulting, index) => (
              <ListCard
                bgColor={index % 2 === 0 ? "#EBF8FF" : "#F5F6F8"}
                key={index}
                {...consulting}
              />
            ))} */}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Stack>
  </Box>
);
