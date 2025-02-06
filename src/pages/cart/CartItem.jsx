import "./CartItem.css";
import { ShopContext } from "../../context/ShopContextProvider";
import { useContext } from "react";

export const CartItem = ({ data }) => {
  const { id, productName, price, productImage } = data;

  const { addToCart, removeFromCart, updateCartAmount, cartItem } =
    useContext(ShopContext);

  return (
    <div>
      <img className="image" src={productImage} />

      <p>{productName}</p>

      <p>${price}</p>

      <div>
        <button onClick={() => removeFromCart(id)}>&minus;</button>

        <input
          value={cartItem[id]}
          onChange={(e) => updateCartAmount(Number(e.target.value), id)}
        />

        <button onClick={() => addToCart(id)}>+</button>
      </div>
    </div>
  );
};
