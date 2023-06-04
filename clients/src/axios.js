import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecommerce-elzy.onrender.com",
});

export default instance;