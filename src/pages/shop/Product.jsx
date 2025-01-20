import "./product.css";

export const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;

  return (
    <div className="product">
      <img alt="image" src={productImage} />

      <div className="description">
        <p>
          <b>{productName}</b>
        </p>

        <p>{price}</p>
      </div>

      <button className="addToCartBttn">Add to Cart</button>
    </div>
  );
};
