import {
  Box,
  Button,
  ButtonGroup,
  Circle,
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
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

export const Footer = () => {
  function clip() {
    var url = "";
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("링크가 복사되었습니다.");
  }
  return (
    <Box color="black">
      <Stack h={2}></Stack>
      <Container
        bg="#F2F3F6"
        as="footer"
        role="contentinfo"
        py={{ base: "12" }}
        maxW={{
          base: "full",
          md: window.location.pathname === "/" ? "full" : "lg",
        }}
        fontSize={{ base: "xs", md: "sm" }}
      >
        <HStack justify={"space-between"} align={"flex-start"}>
          <Stack
            w={"full"}
            // direction={{ base: "column", md: "row" }}
            justify={"space-between"}
          >
            <Stack p={4} spacing={4}>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
                안내
              </Text>
              <HStack>
                <Text w={"80px"}>고객센터</Text>
                <Text>032-277-4915</Text>
              </HStack>
              <HStack>
                <Text w={"80px"}>이메일</Text>
                <Text>procos@hanmail.net</Text>
              </HStack>
            </Stack>
            <Stack p={4}>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
                케어조아 파트너
              </Text>
            </Stack>
            <Stack p={4}>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
                CareJOA
              </Text>
              <Stack color={"rgba(0, 0, 0, 0.7)"}>
                <Text>대표 : 박대수</Text>
                <Text>사업자 등록번호 : 693-47-00786</Text>
                <Text>상호명 : 케이뷰틱스</Text>
              </Stack>
            </Stack>
            <Stack p={4}>
              <HStack gap={6} w={"full"}>
                <Text fontWeight={"bold"} cursor={"pointer"}>
                  이용약관
                </Text>
                <Text fontWeight={"bold"} cursor={"pointer"}>
                  개인정보처리방침
                </Text>
              </HStack>
              <Stack w={"full"} align={"center"} pt={6}>
                <ButtonGroup display={{ base: "flex", md: "none" }}>
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
          <ButtonGroup display={{ base: "none", md: "flex" }}>
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
        </HStack>
        <Tooltip label="링크 복사">
          <Circle
            onClick={clip}
            bgColor={"white"}
            size={"40px"}
            color={"black"}
            position={"fixed"}
            bottom={"4"}
            right={"6"}
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
};
