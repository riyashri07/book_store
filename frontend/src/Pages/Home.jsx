import React, { useEffect, useState } from "react";
import List from "../Components/List";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/Books/Action";
import Loading from "../Components/Loading";

const Home = () => {
    const [allBookData, setBookData] = useState([]);
    const { loading, allBooks, filterData } = useSelector(
        (store) => store.books
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks());
    }, []);

    useEffect(() => {
        if (filterData.length > 0) {
            setBookData(filterData);
        } else {
            setBookData(allBooks);
        }
    }, [filterData, allBooks]);

    if (loading) return <Loading />;

    return (
        <div style={{ backgroundColor: "#e4dfdf" }}>
            <List books={allBookData} />
        </div>
    );
};

export default Home;
