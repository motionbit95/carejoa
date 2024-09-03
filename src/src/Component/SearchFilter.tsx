import {
  Button,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
} from "@chakra-ui/react";
import React from "react";

export const SearchFilter = () => {
  return (
    <Stack p={2} borderBottom={"1px"} borderColor={"gray.300"}>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <GridItem>
          <Select>
            <option>시/도</option>
          </Select>
        </GridItem>
        <GridItem>
          <Select>
            <option>구/군</option>
          </Select>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <GridItem>
          <Select>
            <option>시설형태</option>
          </Select>
        </GridItem>
        <GridItem>
          <Button
            w={"full"}
            bgColor={"#D8D8D8"}
            color={"black"}
            fontWeight={"bold"}
            fontSize={"lg"}
          >
            상세조건 선택
          </Button>
        </GridItem>
      </Grid>
      <InputGroup position={"relative"}>
        <Input borderColor={"gray.200"} />
        <InputRightElement>
          <Button borderLeftRadius={0} position={"absolute"} right={0}>
            검색
          </Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};
