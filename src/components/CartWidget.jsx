import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";

const CartWidget = () => {
    const { getTotalCount, cart } = useContext(CartContext);
    const totalCount = getTotalCount();

    const navigate = useNavigate();
    console.log(cart)

    return (
        <Flex alignItems="center" onClick={() => navigate('/cart')}>
            <FaCartArrowDown size={20} /> {totalCount}
        </Flex>
    );
};

export default CartWidget;