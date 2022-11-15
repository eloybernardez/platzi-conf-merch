import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../slices/productsSlice";
import initialState from "../initialState";

const API = "http://localhost:1337/api/products";

const useInitialState = () => {
  const [products, setProducts] = useState(initialState.products);
  const dispatch = useDispatch();

  // implementation with Strapi
  useEffect(() => {
    async function fetchFunction() {
      const response = await fetch(API);
      const data = await response.json();

      return data;
    }

    let newProducts = [];
    try {
      newProducts = fetchFunction();
    } catch (error) {
      console.error(error.message);
    }

    dispatch(getProducts(newProducts.length ? newProducts : products));
  }, []);
};

export default useInitialState;
