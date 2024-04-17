import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const HeroWithImage = (props: { onClick: () => void }) => (
  <Container py={{ base: "16", md: "24" }}>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={30}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.1,
          x: { duration: 1 },
        }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Stack spacing={{ base: "8", md: "12" }} justifyContent="center">
          <Stack
            spacing={{ base: "4", md: "6" }}
            align={{ base: "center", md: "start" }}
          >
            <Heading size={{ base: "md", md: "md" }} fontWeight={"extrabold"}>
              요양병원 상담이
              <br />
              간편해집니다.
            </Heading>
            <Text fontSize={{ base: "lg", md: "md" }} color="fg.muted">
              비용과 시간을 모두 아껴보세요.
            </Text>
            <Box>
              <Button size={{ base: "lg", md: "xl" }}>무료 상담하기</Button>
            </Box>
          </Stack>
        </Stack>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.1,
          x: { duration: 1 },
        }}
      >
        <AspectRatio ratio={2}>
          <Image
            borderRadius={"2xl"}
            objectFit="cover"
            src="https://tinyurl.com/yeyjvptc"
            alt="Lady at work"
          />
        </AspectRatio>
      </motion.div>
    </SimpleGrid>
  </Container>
);

export const HeroWithImageReverse = (props: { onClick: () => void }) => (
  <Container py={{ base: "16", md: "24" }}>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.1,
          x: { duration: 1 },
        }}
      >
        <AspectRatio ratio={1}>
          <Image
            objectFit="cover"
            src="https://tinyurl.com/yeyjvptc"
            alt="Lady at work"
          />
        </AspectRatio>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.1,
          x: { duration: 1 },
        }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Stack spacing={{ base: "8", md: "12" }} justifyContent="center">
          <Stack spacing={{ base: "4", md: "6" }}>
            <Heading size={{ base: "md", md: "md" }}>
              당신의 영양제는 이것이 문제입니다.
            </Heading>
            <Stack fontSize={{ base: "lg", md: "sm" }} color="fg.muted">
              <Text>영양제를 드시고 더 건강해 지고 싶으신가요?</Text>
              <Text>하지만 무슨 영양제를 드셔야할지 모르시겠나요?</Text>
              <Text>
                매일매일 쏟아지는 영양제 광고와 상반된 주장에 혼란스럽지
                않으신가요?
              </Text>
              <Text>
                누구는 이게 좋다 누구는 이게 좋다. 좋다는 영양제를 하루에도 한
                움큼씩 먹는다 해도 건강은 바뀌지 않습니다.
              </Text>
              <Text>
                내 몸을 좋게 만들고 있는 것이 맞는지 아닌지도 모르는 체 그저
                맹목적으로 남들이 먹으니까, 지인이 추천해서, 아내가 시켜서 먹는
                영양제로는 당신은 결코 건강해질 수 없습니다
              </Text>
            </Stack>
          </Stack>
          {/* <Stack spacing="3">
          <Stack direction={{ base: "column", md: "row" }} spacing="3">
            <Input
              placeholder="Enter your email"
              size={{ base: "lg", md: "xl" }}
              maxW={{ lg: "xs" }}
            />
            <Button size={{ base: "lg", md: "xl" }}>Sign Up</Button>
          </Stack>
          <Text textStyle="xs" color="fg.subtle">
            By signing up, you accept our{" "}
            <Link href="#">Terms and Conditions.</Link>
          </Text>
        </Stack> */}
        </Stack>
      </motion.div>
    </SimpleGrid>
  </Container>
);
