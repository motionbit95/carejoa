import {
  AspectRatio,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const Hero = () => (
  <Container py={{ base: "16", md: "24" }}>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={30}>
      <Stack spacing={{ base: "8", md: "12" }} justifyContent="center">
        <Stack
          spacing={{ base: "4", md: "6" }}
          align={{ base: "center", md: "start" }}
        >
          <Heading
            size={{ base: "lg", md: "lg" }}
            fontWeight={"extrabold"}
            whiteSpace={"pre-line"}
          >
            {"여기저기 요양시설\n찾아보느라 힘드셨죠?"}
            <br />
            {/* 케어조아가 찾아드릴께요! */}
          </Heading>
          <Text fontSize={{ base: "lg", md: "md" }} color="fg.muted">
            케어조아는 상담지만 작성하면 끄~읏
          </Text>
          <Link to="/login">
            <Button size={{ base: "lg", md: "xl" }} colorScheme="blue">
              무료 상담하기
            </Button>
          </Link>
        </Stack>
      </Stack>
      <AspectRatio ratio={2}>
        <Image
          borderRadius={"2xl"}
          objectFit="cover"
          src={require("../../asset/image1.png")}
          // alt="Lady at work"
        />
      </AspectRatio>
    </SimpleGrid>
  </Container>
);
