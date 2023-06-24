import { Spinner, Flex } from "@chakra-ui/react";

const Loading = () => {
    return (
        <Flex
            height="100vh"
            alignItems="center"
            justifyContent="center"
            flexDirection="column">
            <Spinner
                size="xl"
                color="#85004b"
                emptyColor="gray.200"
                thickness="4px"
                speed="0.65s"
                borderTopWidth="5px"
            />
        </Flex>
    );
};

export default Loading;
