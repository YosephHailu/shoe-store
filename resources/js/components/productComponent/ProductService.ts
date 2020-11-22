import http from "../../plugins/axios";

class ProductService {
    getProducts(page = 1) {
        return http.get("/products?page=" + page);
    }

    queryProduct(query) {
        return http.get("/products?q=" + query);
    }

    getProduct(id) {
        return http.get("/products/" + id);
    }
}

export default new ProductService();
