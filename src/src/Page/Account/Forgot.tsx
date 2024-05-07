import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { sendEmail } from "../../Firebase/Auth";
import { useState } from "react";

export const Forgot = (props: any) => {
  const [email, setEmail] = useState("");
  const handleForgot = () => {
    sendEmail(email).then(() => {});
  };
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
      size={{ base: "sm", md: "xl" }}
      // `trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly.
      blockScrollOnMount={false}
      trapFocus={false}
    >
      <ModalOverlay />
      <ModalContent
        bg="bg.surface"
        boxShadow="lg"
        borderRadius="xl"
        p={{ base: "4", sm: "6", md: "8" }}
      >
        <ModalCloseButton />

        <Stack spacing="4">
          <Text fontSize="lg" fontWeight="bold">
            비밀번호 찾기
          </Text>
          <FormControl>
            <Stack>
              {/* <FormLabel>가입시 입력하셨던 이메일을 입력하세요.</FormLabel> */}
              <Input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="가입시 입력하셨던 이메일을 입력하세요."
              />
              <Button onClick={handleForgot}>
                비밀번호 재설정 이메일 보내기
              </Button>
            </Stack>
          </FormControl>
        </Stack>
      </ModalContent>
    </Modal>
  );
};
