import {
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const CalculateInput = ({ ...props }) => {
  const { title } = props;
  const [number, setNumber] = useState<number | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setNumber(isNaN(value) ? undefined : value);
  };

  return (
    <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
      <HStack justify={"space-between"}>
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
          {title}(일)
        </Text>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color={"blue"}
          fontWeight={"semibold"}
        >
          월 {number} 원
        </Text>
      </HStack>
      <InputGroup>
        <Input
          placeholder="0"
          type="number"
          value={number === undefined ? "" : number}
          onChange={handleChange}
        />
        <InputRightAddon>원</InputRightAddon>
      </InputGroup>
    </Stack>
  );
};
