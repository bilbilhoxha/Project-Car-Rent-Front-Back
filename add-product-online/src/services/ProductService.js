import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/products"; // Replace with the correct product API base URL

class ProductService {
    getProducts() {
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createProduct(product) {
        return axios.post(PRODUCT_API_BASE_URL, product);
    }

    getProductById(productId) {
        return axios.get(PRODUCT_API_BASE_URL + '/' + productId);
    }

    updateProduct(productId, product) {
        return axios.put(PRODUCT_API_BASE_URL + '/' + productId, product);
    }

    deleteProduct(productId) {
        return axios.delete(PRODUCT_API_BASE_URL + '/' + productId);
    }
}

export default new ProductService();
