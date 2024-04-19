import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { consultings } from "./data";

export const Consulting = () => (
  <Container py={{ base: "16", md: "24" }}>
    <Stack
      fontSize={{ base: "2xl", md: "3xl" }}
      fontWeight={"bold"}
      color={"blue.500"}
      direction={{ base: "column", md: "row" }}
      align={"center"}
      justify={"center"}
      spacing={{ base: "1", md: "2" }}
    >
      <Text>전화 없이 상담지를</Text>
      <Text>작성하고 요양시설</Text>
      <Text>상담을 신청해보세요.</Text>
    </Stack>
    <Stack mt={12} spacing="8">
      {consultings.map((consulting, index) => (
        <Stack
          key={index}
          direction={{
            base: "column",
            md: index % 2 !== 0 ? "row-reverse" : "row",
          }}
          gap={30}
          bgColor={"gray.100"}
          p={12}
          borderRadius={"2xl"}
        >
          <Stack
            flex={1}
            spacing={{ base: "4", md: "6" }}
            justifyContent="center"
          >
            <Box>
              <Tag colorScheme="blue" color={"blue.500"}>
                {consulting.tag}
              </Tag>
            </Box>
            <Heading size={{ base: "md", md: "md" }} fontWeight={"extrabold"}>
              {consulting.title}
            </Heading>
            <Text fontSize={{ base: "lg", md: "md" }} color="fg.muted">
              {consulting.description}
            </Text>
          </Stack>
          <Box flex={1}>
            <Image
              borderRadius={"2xl"}
              objectFit="cover"
              src={consulting.image}
              alt={consulting.alt}
            />
          </Box>
        </Stack>
      ))}
    </Stack>
  </Container>
);
