import { Flex } from "@chakra-ui/react";
import { FaCartArrowDown } from "react-icons/fa";


const CartWidget = () =>{
    return <Flex alignItems="center">
        <FaCartArrowDown size={20} />0
        </Flex>;
};

export default CartWidget;