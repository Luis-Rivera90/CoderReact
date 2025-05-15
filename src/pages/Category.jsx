import { useParams } from "react-router";
import ItemListContainer from "../components/ItemListContainer";
import { useEffect, useState } from "react";
import { getProductByCategory } from "../services/products.service";

const Category = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductByCategory(id)
        .then((res) => {
            setProducts(res.data.products);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [id]);

    return <ItemListContainer products={products} />
}

export default Category;