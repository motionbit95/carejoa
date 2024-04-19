import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import { useState } from "react";

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
    <Flex align="center" justify="space-between" mb={4}>
      <Box>
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
          placeholder="Select Status"
          w="150px"
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </Select>
      </Box>
      <Button colorScheme="blue" onClick={handleFilter}>
        Filter
      </Button>
    </Flex>
  );
};
