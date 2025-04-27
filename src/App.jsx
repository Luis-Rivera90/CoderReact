import React from "react";
//import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";


const App = () =>{
  
  return (
    <ChakraProvider>
      <Box height="100vh">
        <NavBar/>
        <ItemListContainer greeting="VERTICAL Ski & Snowboard"/>
      </Box>
      
    </ChakraProvider>
  );
};

export default App;