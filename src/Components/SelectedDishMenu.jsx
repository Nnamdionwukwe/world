/* eslint-disable react/prop-types */
import styles from "./SelectedDishMenu.module.css";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function SelectedDishMenu({ selectedId, setSelectedId }) {
  const { dishName, price, image, note } = selectedId;

  const { dispatch } = useContext(ShopContext);

  return (
    <div className={styles.selectMain1}>
      <div className={styles.menu}>
        <ul className={styles.menuHeader}>
          <div className={styles.menuLi}>
            <h3>{dishName}</h3>

            <button onClick={() => setSelectedId(null)}>&times;</button>
          </div>

          <img
            className={styles.menuLiImg}
            src={image}
            alt={`${dishName} image`}
          />

          <div className={styles.dishSub}>
            <h2>{dishName}</h2>

            <div className={styles.nairaDi}>
              <i className="fa-solid fa-naira-sign"></i>
              <h5 className={styles.nairaDiv}> {Number(price)}.00</h5>
            </div>

            <p>{note}</p>
          </div>

          <div className={styles.commentDiv}>
            <p>comments</p>

            <input type="text" />
          </div>

          <div className={styles.addMainDiv1}>
            <div className={styles.addMainDiv}>
              <button onClick={() => setSelectedId(null)}>Close</button>

              <div
                className={styles.cartLogo}
                onClick={() => dispatch({ type: "Add", product: selectedId })}
              >
                <i className="fa-solid fa-cart-plus"></i>
                <p onClick={() => setSelectedId(null)}>Add to Cart</p>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
