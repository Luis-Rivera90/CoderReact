import React from "react";
//import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./layouts/MainLayout";
import ItemListContainer from "./components/ItemListContainer";


const App = () =>{
  
  return (
    <ChakraProvider>
      <MainLayout>
        <ItemListContainer greeting="VERTICAL Ski & Snowboard"/>
      </MainLayout>
      
    </ChakraProvider>
  );
};

export default App;