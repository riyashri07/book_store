import React from "react";
import Card_Order from "./Card_Order";
import { Box, Heading, Stack } from "@chakra-ui/react";

const Order_Content = ({ orders }) => {
    return (
        <Box width={"full"} p={4} height={"100vh"} mt={"70px"}>
            <Heading as="h1" mb={4}>
                Orders
            </Heading>

            <Stack spacing={4}>
                {orders.map((order, i) => (
                    <Card_Order key={i} item={order} />
                ))}
            </Stack>
        </Box>
    );
};

export default Order_Content;
