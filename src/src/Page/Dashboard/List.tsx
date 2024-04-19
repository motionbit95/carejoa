import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { data } from "./data";
import { Filter } from "../../Component/Filter";

export const List = () => (
  <Box as="section" bg="bg.surface">
    <Container py={{ base: "2", md: "4" }}>
      <Heading size={{ base: "sm", md: "sm" }}>상담목록</Heading>
    </Container>
    {/* <Filter /> */}
    <Container py={{ base: "4", md: "8" }}>
      <Stack spacing={{ base: "3", md: "6" }}>
        <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Td>상태</Td>
                  <Td>신청일</Td>
                  <Td>요양시설</Td>
                  <Td>지역</Td>
                  <Td>시설등급</Td>
                  <Td>시설크기</Td>
                  <Td>비용</Td>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((item) => (
                  <Tr>
                    <Td>{item.state}</Td>
                    <Td>
                      {item.date}
                      <br />
                      {item.time}
                    </Td>
                    <Td>{item.shelter}</Td>
                    <Td>{item.region}</Td>
                    <Td>{item.rating}</Td>
                    <Td>{item.size}</Td>
                    <Td>{item.class}</Td>
                    <Td>
                      <ButtonGroup spacing={"4"}>
                        <Button>삭제</Button>
                        <Button>수정</Button>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
