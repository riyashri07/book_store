import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CartContent from "./CartContent";

const CartLists = ({ cartItems, handleOrder }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cartItems
        .reduce((acc, el) => acc + Number(el.price * el.qty), 0)
        .toFixed(2)
    );
  }, [cartItems]);
    console.log(cartItems)
    const all = cartItems[0];
  return (
      <Box mt={"80px"} height={"100vh"}>
          {all.map((cart) => (
              <CartContent key={cart._id} cart={cart} />
          ))}

          <Flex px={4} gap={"10px"} alignItems={"center"}>
              <Button
                  borderRadius="lg"
                  colorScheme="#85004b"
                  _hover={{
                      bg: "#85004b",
                      color: "white",
                  }}
                  variant="outline"
                  onClick={handleOrder}>
                  Place Order
              </Button>
              <Text as={"p"}>Total Amount:- $ {total}</Text>
          </Flex>
      </Box>
  );
};

export default CartLists;
