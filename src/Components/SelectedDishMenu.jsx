/* eslint-disable react/prop-types */
import styles from "./SelectedDishMenu.module.css";

export default function SelectedDishMenu({
  selectedId,
  handleDishClose,
  handleAddToCart,
}) {
  const { dishName, price, image, note, id } = selectedId;
  console.log(selectedId);

  function handleAddDish(e) {
    e.preventDefault();
    const newDish = { dishName, price, image, id, qty: 0 };
    handleAddToCart(newDish, id);
    console.log(newDish);
  }

  return (
    <div className={styles.selectMain1}>
      <form onSubmit={handleAddDish} className={styles.menu}>
        <ul className={styles.menuHeader}>
          <div className={styles.menuLi}>
            <h3>{dishName}</h3>

            <button onClick={handleDishClose}>&times;</button>
          </div>

          <a href="/FullDishImg">
            <img src={image} alt={`${dishName} image`} />
          </a>

          <div className={styles.dishSub}>
            <h2>{dishName}</h2>

            <div className={styles.nairaDi}>
              <i className="fa-solid fa-naira-sign"></i>
              <h5 className={styles.nairaDiv}> {price}.00</h5>
            </div>

            <p>{note}</p>
          </div>

          <div className={styles.commentDiv}>
            <p>comments</p>

            <input type="text" />
          </div>

          <div className={styles.addMainDiv1}>
            <div className={styles.addMainDiv}>
              <button onClick={handleDishClose}>Close</button>

              <div className={styles.cartLogo} onClick={handleAddDish}>
                <i className="fa-solid fa-cart-plus"></i>
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </ul>
      </form>
    </div>
  );
}
