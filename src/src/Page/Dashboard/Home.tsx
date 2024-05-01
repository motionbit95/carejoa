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

export const Home = ({ ...props }) => (
  // 대시보드 메인페이지
  <Box as="section">
    <Topbar
      menu="대시보드"
      buttons={
        props.userInfo?.type === "0"
          ? ["상담내용 확인", "상담 신청하기"]
          : ["상담 목록 확인", "견적서 관리"]
      }
      navigations={
        props.userInfo?.type === "0"
          ? ["list", "consulting"]
          : ["list", "estimate"]
      }
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
              안녕하세요, {props.userInfo?.name}님
            </Heading>
            <Stack spacing="0" opacity={0.5}>
              <Text>케어조아에 오신 것을 환영합니다.</Text>
              <Text>
                케어조아에서 당신의 건강과 안녕에 대한 첫걸음을 내딛어보세요.
              </Text>
            </Stack>
            {props.userInfo?.type === "0" ? (
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
            ) : (
              <ButtonGroup size="lg" spacing="4">
                <Button
                  onClick={() => {
                    localStorage.setItem("menu", "list");
                    window.location.reload();
                  }}
                  variant="outline"
                >
                  상담 목록 확인
                </Button>
                <Button
                  onClick={() => {
                    localStorage.setItem("menu", "estimate");
                    window.location.reload();
                  }}
                >
                  견적서 관리
                </Button>
              </ButtonGroup>
            )}
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
        {props.userInfo?.type === "0" ? (
          <Stack
            p={{ base: "2", md: "4" }}
            borderRadius={"xl"}
            shadow={"sm"}
            spacing={{ base: "3", md: "6" }}
          >
            {/* 수정필요 */}
            <Heading size={"xs"}>최근에 신청한 상담</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <Text>상담 신청내역</Text>
            </SimpleGrid>
          </Stack>
        ) : (
          <Stack
            p={{ base: "2", md: "4" }}
            borderRadius={"xl"}
            shadow={"sm"}
            spacing={{ base: "3", md: "6" }}
          >
            {/* 수정필요 */}
            <Heading size={"xs"}>최근에 매칭된 상담</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <Text>매칭내역</Text>
            </SimpleGrid>
          </Stack>
        )}
      </Stack>
    </Stack>
  </Box>
);
