/* eslint-disable react/prop-types */
import DetailsButton from "./DetailsButton";
import styles from "./SaladItem.module.css";

export default function SaladItem({ salad, handleSelectId }) {
  const { dishName, price, image, note } = salad;

  return (
    <li onClick={() => handleSelectId(salad)} className={styles.saladMainLi}>
      <div className={styles.li}>
        <div>
          <img src={image} />
        </div>

        <div className={styles.priceDiv}>
          <h5 className={styles.dishName}>{dishName}</h5>

          <div className={styles.nairaDiv}>
            <i className="fa-solid fa-naira-sign"></i>
            <h5 className={styles.price}> {parseInt(price)},000.00</h5>
          </div>

          <h5 className={styles.note}>{note}</h5>
        </div>
      </div>

      <div className={styles.details}>
        <DetailsButton />
      </div>
    </li>
  );
}
