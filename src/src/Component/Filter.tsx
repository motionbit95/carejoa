import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineFilterList, MdSearch } from "react-icons/md";

interface Filter {
  date: string;
  status: string;
}

interface FilterBarProps {
  onFilter: (filter: Filter) => void;
}

export const Filter = ({ onFilter }: FilterBarProps) => {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const handleFilter = () => {
    // 선택된 날짜와 상태를 부모 컴포넌트로 전달
    onFilter({ date, status });
  };

  return (
    <HStack align="center" mb={4} bgColor={"gray"} p={4}>
      <Button colorScheme="blue" onClick={handleFilter} gap={2}>
        <Icon as={MdOutlineFilterList} />
        Filter
      </Button>
      <Flex>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Select Date"
          mr={2}
        />
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="전체상담"
          w={"200px"}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </Select>
      </Flex>
    </HStack>
  );
};
