/* eslint-disable react/prop-types */
import "./product.css";
import { ShopContext } from "../../context/ShopContextProvider";
import { useContext } from "react";

export const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;

  const { addToCart, cartItem } = useContext(ShopContext);

  const cartItemAmount = cartItem[id];

  return (
    <div className="product">
      <img alt="image" src={productImage} />

      <div className="description">
        <p>
          <b>{productName}</b>
        </p>

        <p>{price}</p>
      </div>

      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
