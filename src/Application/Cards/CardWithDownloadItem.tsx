import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiFileText } from "react-icons/fi";

export const CardWithDownloadItem = () => (
  <Box as="section" py={{ base: "4", md: "8" }}>
    <Container maxW="3xl">
      <Box
        bg="bg.surface"
        boxShadow="sm"
        borderRadius="lg"
        p={{ base: "4", md: "6" }}
      >
        <Stack spacing="5">
          <Stack spacing="1">
            <Text textStyle="lg" fontWeight="medium">
              Invoice
            </Text>
            <Text textStyle="sm" color="fg.muted">
              Please pay the outstanding amount by the end of the following
              month.
            </Text>
          </Stack>
          <Box
            borderWidth={{ base: "0", md: "1px" }}
            p={{ base: "0", md: "4" }}
            borderRadius="lg"
          >
            <Stack
              justify="space-between"
              direction={{ base: "column", md: "row" }}
              spacing="5"
            >
              <HStack spacing="3">
                <Square size="10" bg="bg.subtle" borderRadius="lg">
                  <Icon as={FiFileText} boxSize="5" />
                </Square>
                <Box fontSize="sm">
                  <Text color="empahsized" fontWeight="medium">
                    Invoice_03/2022.pdf
                  </Text>
                  <Text color="fg.muted">1.2MB</Text>
                </Box>
              </HStack>
              <Stack
                spacing="3"
                direction={{ base: "column-reverse", md: "row" }}
              >
                <Button variant="secondary">Download</Button>
                <Button>View</Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  </Box>
);
