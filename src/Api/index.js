import axios from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const allProducts = async () => {
  return await API.get("/products");
};
