import {
  Button,
  ButtonGroup,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { data } from "../Page/Dashboard/data";

const goDetail = () => {
  alert("상세 상담페이지로 이동");
};

export const ConsultingList = ({ ...props }) => {
  return (
    <TableContainer
      border={"1px"}
      borderColor={"gray.200"}
      borderRadius={"xl"}
      shadow={"sm"}
      p={4}
    >
      <Table size={"sm"}>
        <Thead>
          <Tr fontWeight={"bold"}>
            <Td>상태</Td>
            <Td>신청일</Td>
            <Td>요양시설</Td>
            <Td>지역</Td>
            <Td>시설등급</Td>
            <Td>시설크기</Td>
            <Td>비용</Td>
            <Td></Td>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr cursor={"pointer"} onClick={props.onClick}>
              <Td>
                <Tag
                  colorScheme={
                    item.state === "작성중"
                      ? "gray"
                      : item.state === "신청완료"
                      ? "blue"
                      : "green"
                  }
                >
                  {item.state}
                </Tag>
              </Td>
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
                  <Button colorScheme="gray" size={"xs"} px={"3"}>
                    삭제
                  </Button>
                  <Button
                    size={"xs"}
                    px={"3"}
                    colorScheme="blue"
                    display={item.state === "상담완료" ? "none" : "block"}
                  >
                    수정
                  </Button>
                </ButtonGroup>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};