import { Wrap } from "@chakra-ui/react";
import ProductCard from "./ProductCard";


const ItemListContainer = ({products}) => {
    

    return (

        <Wrap justify="center" spacing="30px" p={5}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    image={product.thumbnail}
                    price={product.price}
                    isNew={product.isNew}
                    rating={product.rating}
                    numReviews={product.numReviews}
                />
            ))}
        </Wrap>
        
    );
};

export default ItemListContainer;