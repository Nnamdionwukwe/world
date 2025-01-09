/* eslint-disable react/prop-types */
import styles from "./CartItem.module.css";

export default function CartItem({
  cart,
  handleDeleteItem,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}) {
  const { dishName, price, image, id, qty } = cart;
  // const { id } = selectedId;
  console.log(cart);

  const total = Number(price) * qty;

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.mainImgDiv}>
          <div className={styles.coverDiv}>
            <div className={styles.plusDiv}>
              <h5 onClick={() => handleIncreaseQuantity(cart.id)}>+</h5>

              <p>{qty}</p>

              <h4 onClick={() => handleDecreaseQuantity(cart.id)}>&minus;</h4>
            </div>

            <div className={styles.imgDiv}>
              <img src={image} alt={`${dishName} image`} />
            </div>

            <div className={styles.nameDiv}>
              <p>{dishName}</p>

              <p className={styles.qty}>qty: {qty}</p>

              <div className={styles.nairaDi}>
                <i className="fa-solid fa-naira-sign"></i>

                <p>
                  {price}.00 &times; {qty} = {total}
                </p>
              </div>
            </div>
          </div>

          <button className={styles.btn} onClick={() => handleDeleteItem(id)}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}
