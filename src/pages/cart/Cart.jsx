import { ShopContext } from "../../context/ShopContextProvider";
import { useContext } from "react";
import { PRODUCTS } from "../../products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItem, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div>
        {PRODUCTS.map((product) => {
          if (cartItem[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div>
          <button onClick={() => navigate("/")}>Back to Shoping</button>
          <h5>SubTotal: {totalAmount} </h5>
        </div>
      ) : (
        <div>
          <h1>Your Cart is Empty</h1>
        </div>
      )}
    </div>
  );
};
