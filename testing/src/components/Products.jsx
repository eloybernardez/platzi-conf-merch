import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../slices/cartSlice";
import Product from "./Product";
import "../styles/components/Products.styl";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleAddToCart = (product) => () => {
    dispatch(AddToCart(product));
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products?.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
