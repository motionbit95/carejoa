import {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Topbar } from "../../Component/TopBar/TopBar";
import { data } from "./data";
import { ConsultingList } from "../../ConsultingList";

export const Home = (props: { onclick: (menu: string) => void }) => (
  <Box as="section">
    <Topbar {...props} />
    <Container py={{ base: "4", md: "8" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          h="200"
          borderRadius={"xl"}
          shadow={"sm"}
        >
          <Stack justify={"center"} spacing={{ base: "2", md: "4" }} p="4">
            <Heading size={{ base: "sm", md: "md" }}>안녕하세요, OOO님</Heading>
            <Stack spacing="0">
              <Text>케어조아에 오신 것을 환영합니다.</Text>
              <Text>
                케어조아에서 당신의 건강과 안녕에 대한 첫걸음을 내딛어보세요.
              </Text>
            </Stack>
            <ButtonGroup size="lg" spacing="4">
              <Button variant="outline">상담내용 확인</Button>
              <Button onClick={() => props.onclick("consulting")}>
                상담 신청하기
              </Button>
            </ButtonGroup>
          </Stack>
          <AspectRatio ratio={3}>
            <Image
              // borderRadius={"2xl"}
              objectFit="cover"
              src="https://tinyurl.com/yeyjvptc"
              alt="Lady at work"
            />
          </AspectRatio>
        </SimpleGrid>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <Heading size={"sm"}>최근에 신청한 상담</Heading>
          <ConsultingList />
        </Stack>
      </Stack>
    </Container>
  </Box>
);
