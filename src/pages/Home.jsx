import { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer";
import { getAllProducts } from "../services/products.service";

const Home = () => {

    const [products, setProducts] = useState([]);
    
    
        useEffect(() => {
            getAllProducts().then((res) => {
                setProducts(res.data.products);
            });
        }, []);

    return <ItemListContainer products={products} />
};

export default Home;