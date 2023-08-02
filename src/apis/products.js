import axios from "axios";

export const getCategoryProducts = (category) => {
    const url = "/products/category/".concat(category);
    return axios.get(url)
}