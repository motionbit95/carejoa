import { Checkbox, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { HiChevronRight } from "react-icons/hi";

export function TermsAgreement(props: any) {
  const [checkedItems, setCheckedItems] = useState([
    false,
    false,
    false,
    false,
  ]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <Stack border={"1px"} borderColor={"gray.300"} rounded={"md"} p={"4"}>
      <Checkbox
        size="lg"
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => {
          props.setCheckedItems([
            e.target.checked,
            e.target.checked,
            e.target.checked,
          ]);
          setCheckedItems([
            e.target.checked,
            e.target.checked,
            e.target.checked,
          ]);
        }}
      >
        <Text>약관 전체 동의</Text>
      </Checkbox>
      <hr />
      <Stack fontSize={"sm"} color={"fg.muted"} spacing={2}>
        <HStack>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) => {
              props.setCheckedItems([
                e.target.checked,
                checkedItems[1],
                checkedItems[2],
              ]);
              setCheckedItems([
                e.target.checked,
                checkedItems[1],
                checkedItems[2],
              ]);
            }}
          />
          <HStack justify={"space-between"} w={"100%"}>
            <Text>(필수) 케어조아 이용약관 동의</Text>
            <HiChevronRight size={20} />
          </HStack>
        </HStack>
        <HStack>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => {
              props.setCheckedItems([
                checkedItems[0],
                e.target.checked,
                checkedItems[2],
              ]);
              setCheckedItems([
                checkedItems[0],
                e.target.checked,
                checkedItems[2],
              ]);
            }}
          />
          <HStack justify={"space-between"} w={"100%"}>
            <Text>(필수) 개인정보 수집 및 이용동의</Text>
            <HiChevronRight size={20} />
          </HStack>
        </HStack>
        <HStack>
          <Checkbox
            isChecked={checkedItems[2]}
            onChange={(e) => {
              props.setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                e.target.checked,
              ]);
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                e.target.checked,
              ]);
            }}
          />
          <Text>(선택) 마케팅정보 앱푸시, SMS 수신 동의</Text>
        </HStack>
      </Stack>
    </Stack>
  );
}
