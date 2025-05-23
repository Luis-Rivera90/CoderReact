import axios from "axios";

export async function getAllProducts() {
    return await axios.get('https://dummyjson.com/products');
}

export async function createNewProduct(data) {
    return await axios.post('https://dummyjson.com/products/add', data);
}

export async function updateProduct(id, data) {
    return await axios.put(`https://dummyjson.com/products/${id}`, data);
}

export async function deleteProduct(id) {
    return await axios.delete(`https://dummyjson.com/products/${id}`);
}

export async function getProductById(id) {
    return await axios.get(`https://dummyjson.com/products/${id}`);
}

export async function getProductByCategory(id) {
    return await axios.get(`https://dummyjson.com/products/category/${id}`);
}

export async function getAllCategories() {
    return await axios.get('https://dummyjson.com/products/categories');
}