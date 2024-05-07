import {
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import moment from "moment";
import { getDocument } from "../Firebase/Database";
import { auth } from "../Firebase/Config";

interface Filter {
  startDate: string;
  endDate: string;
  status: string;
}

interface FilterBarProps {
  onFilter: (filter: Filter) => void;
}

export const Filter = ({ onFilter }: FilterBarProps) => {
  // const [date, setDate] = useState("");
  const [user, setUser] = useState<any>(null);
  const [status, setStatus] = useState("");
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    new Date(),
  ]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        getDocument("users", user.uid).then(async (data: any) => {
          setUser(data);
        });
      }
    });
  }, []);

  const handleFilter = () => {
    // 선택된 날짜와 상태를 부모 컴포넌트로 전달
    onFilter({
      startDate: moment(selectedDates[0]).format("YYYY-MM-DD"),
      endDate: moment(selectedDates[1]).format("YYYY-MM-DD"),
      status,
    });
  };

  return (
    <HStack align="center" mb={4} bgColor={"gray.50"} p={4}>
      {/* <Button
        variant="ghost"
        colorScheme="black"
        onClick={handleFilter}
        gap={2}
      >
        <Icon as={MdOutlineFilterList} />
        필터
      </Button> */}
      {/* <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Select Date"
        mr={2}
      /> */}
      <Flex>
        <RangeDatepicker
          configs={{
            dateFormat: "yyyy/MM/dd",
            dayNames: ["일", "월", "화", "수", "목", "금", "토"], // length of 7
            monthNames:
              "1월,2월,3월,4월,5월,6월,7월,8월,9월,10월,11월,12월".split(","), // length of 12
            firstDayOfWeek: 0, // default is 0, the dayNames[0], which is Sunday if you don't specify your own dayNames,
          }}
          propsConfigs={propsConfigs}
          selectedDates={selectedDates}
          onDateChange={(dates) => {
            setSelectedDates(dates);
          }}
        />
      </Flex>
      {user?.type === "0" && (
        <Select
          bgColor={"white"}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="전체상담"
          w={"200px"}
        >
          <option value="0">작성중</option>
          <option value="1">신청완료</option>
          <option value="2">상담완료</option>
        </Select>
      )}
      <IconButton
        variant={"ghost"}
        aria-label=""
        icon={<BiSearch />}
        onClick={handleFilter}
      />
    </HStack>
  );
};

const propsConfigs = {
  dateNavBtnProps: {
    colorScheme: "black",
    variant: "ghost",
  },
  dayOfMonthBtnProps: {
    defaultBtnProps: {
      color: "black",
      _hover: { bg: "gray.300" },
    },
    isInRangeBtnProps: {
      bgColor: "gray.400",
      color: "white",
    },
    selectedBtnProps: {
      background: "gray.500",
      color: "white",
    },
  },
  inputProps: {
    size: "sm",
  },
  calendarPanelProps: {},
  weekdayLabelProps: {
    fontWeight: "normal",
  },
  dateHeadingProps: {
    fontWeight: "semibold",
    fontSize: "md",
    width: "100%",
  },
};
