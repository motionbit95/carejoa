import {
  Box,
  Button,
  ButtonGroup,
  Circle,
  Container,
  Divider,
  Icon,
  IconButton,
  Stack,
  StackDivider,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { BiLink } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { ImBubble } from "react-icons/im";
import { RiKakaoTalkFill } from "react-icons/ri";

export const Footer = () => (
  <Box bg="bg.accent.default" color="fg.accent.default">
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
      >
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="space-between" direction="row" align="center">
            {/* <Logo /> */}
            <Text fontWeight="bold" fontSize="2xl">
              케어조아
            </Text>
          </Stack>
          <Stack opacity={0.7}>
            <Stack
              direction={{ base: "column", md: "row" }}
              divider={<StackDivider opacity={0.5} />}
              spacing={4}
            >
              <Text>대표자 : 박대수</Text>
              {/* <Divider orientation="vertical" h={"6"} /> */}
              <Text>상호명 : 케이뷰틱스</Text>
            </Stack>
            <Stack
              direction={{ base: "column", md: "row" }}
              divider={<StackDivider opacity={0.5} />}
              spacing={4}
            >
              <Text>Call : 032-277-4915</Text>
              {/* <Divider orientation="vertical" h={"6"} /> */}
              <Text>사업자번호 : 693-47-00786</Text>
              {/* <Divider orientation="vertical" h={"6"} /> */}
              <Text>이메일 : procos@hanmail.net</Text>
            </Stack>
          </Stack>
          <Stack
            justify={"space-between"}
            direction={{ base: "column", md: "row" }}
            align="center"
          >
            <Text fontSize="sm" color="fg.accent.subtle">
              &copy; {new Date().getFullYear()} CareJOA Inc. All rights
              reserved.
            </Text>
            <ButtonGroup colorScheme="gray">
              {/* <IconButton  aria-label="Naver" /> */}
              <Button
                fontSize={"xl"}
                fontWeight={"extrabold"}
                padding={"2px 4px"}
                size={"md"}
                color={"green.400"}
                aria-label="naver"
              >
                N
              </Button>
              <Button
                aria-label="blog"
                fontSize={"sm"}
                fontWeight={"extrabold"}
                padding={"2px 4px"}
                size={"md"}
                color={"green.400"}
              >
                blog
              </Button>
              <IconButton
                color={"red"}
                icon={<BsYoutube />}
                aria-label="youtube"
              />
              <IconButton
                color={"yellow.400"}
                icon={<ImBubble />}
                aria-label="kakao"
              />
            </ButtonGroup>
          </Stack>
        </Stack>
      </Stack>
      <Tooltip label="링크 복사">
        <Circle
          bgColor={"white"}
          size={"40px"}
          color={"black"}
          position={"fixed"}
          bottom={"10"}
          right={"10"}
          _hover={{ bgColor: "gray.300", color: "white" }}
          cursor={"pointer"}
          zIndex={10}
          shadow={"lg"}
        >
          <Icon as={BiLink} fontSize={"3xl"} />
        </Circle>
      </Tooltip>
    </Container>
  </Box>
);
