import { Flex, Wrap } from "@chakra-ui/react";
import { getAllProducts } from "../services/products.service";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.data.products);
        });
    }, []);

    return (

        <Wrap justify="center" spacing="30px" p={5}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    image={product.thumbnail}
                    price={product.price}
                    isNew={product.isNew}
                    rating={product.rating}
                    numReviews={product.numReviews}
                />
            ))}
        </Wrap>
        /*<Flex>
           {products.map ((product) => {
               return <div>{product.title}</div>
           })}
           </Flex>*/
    );
};

export default ItemListContainer;