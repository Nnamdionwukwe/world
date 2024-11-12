/* eslint-disable react/prop-types */
import styles from "./SelectedDishMenu.module.css";

export default function SelectedDishMenu({
  selectedId,
  handleDishClose,
  handleAddToCart,
  qty,
}) {
  const { dishName, price, image, note, id } = selectedId;

  function handleAddDish(e) {
    e.preventDefault();
    const newDish = { dishName, price, image, id, qty };
    handleAddToCart(newDish);
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

          <img src={image} alt={`${dishName} image`} />

          <div className={styles.dishSub}>
            <h2>{dishName}</h2>

            <h5># {price}.00</h5>

            <p>{note}</p>
          </div>

          <div className={styles.commentDiv}>
            <p>comments</p>

            <input type="text" />
          </div>

          <div>
            <div className={styles.addMainDiv}>
              <button onClick={handleDishClose}>Close</button>

              <div onClick={handleAddDish}>
                <img src="home.svg" />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </ul>
      </form>
    </div>
  );
}
