import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { cart } from "./_data";

export const CartWithBottomSummary = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <Stack spacing={{ base: "8", md: "12" }}>
      <Heading fontSize="2xl" fontWeight="extrabold">
        Shopping Cart (3)
      </Heading>
      <Stack spacing="8">
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </Stack>
      <Flex width="full" flexDirection="row" justifyContent="flex-end">
        <CartOrderSummary />
      </Flex>
    </Stack>
  </Box>
);
