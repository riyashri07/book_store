import { Grid } from "@chakra-ui/react";
import React from "react";
import Card_book from "./Card_book";
import { getBooks } from "../Redux/Books/Action";

const BookList = ({ books }) => {
    // console.log(books)
  return (
      <Grid
          mt={"80px"}
          templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
          }}
          gap={4}
          p={2}
          justifyContent="center">
          {books.map((book, i) => (
              <Card_book key={i} book={book} />
          ))}
      </Grid>
  );
};

export default BookList;
