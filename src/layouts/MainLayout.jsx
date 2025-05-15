import { Box, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <Box height={"100vh"} width={"100vw"}>
            <NavBar />
            <Flex height={"90vh"}>
                <Outlet/>
            </Flex>
        </Box>
    );
};

export default MainLayout;