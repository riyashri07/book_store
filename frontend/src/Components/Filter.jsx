import React, { useState } from "react";
import { Box, Select, HStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksbyFilter } from "../Redux/Books/Action";

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const { allBooks } = useSelector((store) => store.books);
    const [category, setCategory] = useState([
        // ...new Set(allBooks.map((book) => book.category)),
    ]);

    const dispatch = useDispatch();

    const handleCategoryChange = (event) => {
        const { value } = event.target;
        setSelectedCategory(value);
        dispatch(getBooksbyFilter(value));
    };

    return (
        <Box>
            <HStack>
                <Select
                    value={selectedCategory}
                    onChange={handleCategoryChange}>
                    <option value="">All Category</option>
                    {category.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </Select>
            </HStack>
        </Box>
    );
};

export default Filter;
