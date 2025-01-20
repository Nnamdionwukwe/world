import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./product.css";

export const Shop = () => {
  return (
    <div>
      <h1 className="productHeader">Michael Shop</h1>

      <div>
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
