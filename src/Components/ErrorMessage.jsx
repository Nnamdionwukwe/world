/* eslint-disable react/prop-types */
import styles from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return (
    <h3 className={styles.message}>
      Sorry {message} Dishes please check your network connection!!
    </h3>
  );
}
