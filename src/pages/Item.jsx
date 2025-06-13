import { useParams } from "react-router";
import ItemDetailContainer from "../components/ItemDetailContainer"
import { useEffect, useState } from "react";
import { Spinner } from '@chakra-ui/react'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/config/firebase";

const Item = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState (true)

    useEffect(()=>{

        const productDoc = doc(db, "products", id)
        getDoc(productDoc)
        .then((snapshot) => {
            setProduct({id: snapshot.id, ...snapshot.data() });
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return loading ? <Spinner /> : (<ItemDetailContainer product={product} />)
};

export default Item;