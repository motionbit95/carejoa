import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

export const Forgot = (props: any) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
      size={{ base: "full", md: "xl" }}
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
            비밀번호 찾아줘요
          </Text>
        </Stack>
      </ModalContent>
    </Modal>
  );
};
