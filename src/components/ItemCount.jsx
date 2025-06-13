import { Box, Button, useColorModeValue } from "@chakra-ui/react"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCount = ({product}) =>{

    const {addProductToCart, removeProductFromCart} = useContext(CartContext)

    return (
        <Box>
            <Button rounded={'md'}
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg={useColorModeValue('teal.500', 'teal.300')}
                        color={useColorModeValue('white', 'gray.900')}
                        fontWeight="bold"
                        textTransform={'uppercase'}
                        _hover={{
                            bg: useColorModeValue('teal.600', 'teal.400'),
                            transform: 'translateY(-1px)',
                            boxShadow: 'lg',
                        }} onClick={() => addProductToCart(product)} >Agregar Producto</Button>
            <Button rounded={'md'}
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg={useColorModeValue('teal.500', 'teal.300')}
                        color={useColorModeValue('white', 'gray.900')}
                        fontWeight="bold"
                        textTransform={'uppercase'}
                        _hover={{
                            bg: useColorModeValue('teal.600', 'teal.400'),
                            transform: 'translateY(-1px)',
                            boxShadow: 'lg',
                        }} onClick={() => {removeProductFromCart(product)}} >Quitar Item</Button>
        </Box>
    );
};

export default ItemCount;