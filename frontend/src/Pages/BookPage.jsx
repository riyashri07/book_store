import {
    Box,
    Button,
    Heading,
    Image,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../Redux/Books/Action";
import { addItemToCart } from "../Redux/Cart/Action";
import Loading from "../Components/Loading";

const BookPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const   singleBook  = useSelector((store) => store.books.allBooks);
console.log(singleBook)
    const toast = useToast();
    const { addCartItem, cartData } = useSelector((store) => store.cart);
    const { loading: cartLoading } = addCartItem;

    useEffect(() => {
        dispatch(getBookDetail(id));
    }, []);

    const newItem = {
        ...singleBook,
        qty: 1,
    };

    const handleAddToCart = () => {
        const isItemInCart = cartData.find((item) => item._id === newItem._id);

        if (isItemInCart) {
            toast({
                title: "Add Failed.",
                description: "Item already in Cart.",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        } else {
            dispatch(addItemToCart(singleBook[0]));
            toast({
                title: "Add Success.",
                description: "Now you can explore Cart.",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        }
    };

    if (!singleBook) {
        return <Box>Book not found.</Box>;
    }
    // if (loading) return <Loading />;
    return (
        <Box mt={"80px"} p={4} justifyContent={"center"} alignItems={"center"}>
            <Stack spacing={4} direction={{ base: "column", md: "row" }}>
                <Image
                    src={singleBook[0].image}
                    alt={singleBook[0].title}
                    maxW={{ base: "100%", md: "300px" }}
                />
                <Box>
                    <Heading as="h2" size="lg">
                        {singleBook[0].title}
                    </Heading>
                    <Text fontSize="lg" fontWeight="bold" mt={2}>
                        {singleBook[0].author}
                    </Text>
                    <Text fontSize="lg" mt={2}>
                        Price: Rs. {singleBook[0].price}
                    </Text>
                    <Text fontSize="lg" mt={2}>
                        Category: {singleBook[0].category}
                    </Text>
                    <Text fontSize="lg" mt={2}>
                        Description: {singleBook[0].description}
                    </Text>
                    <Box>
                        <Button
                            isLoading={cartLoading}
                            isDisabled={cartData.find(
                                (item) => item._id === newItem._id
                            )}
                            loadingText="Add to Cart"
                            width="full"
                            p={4}
                            borderRadius="lg"
                            colorScheme="red"
                            _hover={{
                                bg: "red.300",
                                color: "white",
                            }}
                            variant="outline"
                            mt={4}
                            onClick={handleAddToCart}>
                            Add To Cart
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default BookPage;
