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
  // const [result, setResult] = useState<number | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setNumber(isNaN(value) ? undefined : value);
    // setResult(value * 30);
    props.onChange(title, value * 30);
  };

  return (
    <Stack p={{ base: "2", md: "4" }} borderRadius={"xl"} shadow={"sm"}>
      <HStack justify={"space-between"} spacing={1}>
        <Text flex={1} fontSize={{ base: "lg", md: "2xl" }} fontWeight={"bold"}>
          {title}(일)
        </Text>
        <Text
          flex={1}
          textAlign={"right"}
          fontSize={{ base: "md", md: "xl" }}
          color={"blue"}
          fontWeight={"semibold"}
        >
          월 {number === undefined ? 0 : (number * 30)?.toLocaleString()} 원
        </Text>
      </HStack>
      <Text opacity={0.5}>30일 기준</Text>
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
