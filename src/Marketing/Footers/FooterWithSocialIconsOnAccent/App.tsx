import { Box, Container, Divider, Stack, Text } from "@chakra-ui/react";
import { Logo } from "./Logo";

export const FooterWithSocialIconsOnAccent = () => (
  <Box bg="bg.accent.default" color="fg.accent.default">
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          {/* <Logo /> */}
          <Text fontWeight="bold" fontSize="2xl">
            케어조아
          </Text>
        </Stack>
        <Stack>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Text>대표자 : 박대수</Text>
            <Divider orientation="vertical" h={"6"} />
            <Text>상호명 : 케이뷰틱스</Text>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Text>Call : 032-277-4915</Text>
            <Divider orientation="vertical" h={"6"} />
            <Text>사업자번호 : 693-47-00786</Text>
            <Divider orientation="vertical" h={"6"} />
            <Text>이메일 : procos@hanmail.net</Text>
          </Stack>
        </Stack>
        <Text fontSize="sm" color="fg.accent.subtle">
          &copy; {new Date().getFullYear()} CareJOA Inc. All rights reserved.
        </Text>
      </Stack>
    </Container>
  </Box>
);
