import React from "react";
import Thumb from "../Thumb";

const Product = props => {
  const { product } = props;
  return (
    <div className="shelf-item" data-sku={product.sku}>
      <div>
        <Thumb
          classes="shelf-item__thumb"
          src={require(`../../static/data/products/${product.sku}_1.jpg`)}
          alt={product.title}
        />
        <p className="shelf-item__title">{product.title}</p>
        <p className="shelf-item__price">{`$ ${product.price}`}</p>
        <div className="shelf-item__buy-btn">Add to cart</div>
      </div>
    </div>
  );
};

export default Product;
