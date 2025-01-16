import { useState } from "react";
import styles from "./CheckOutDetails.module.css";

export default function AccountSignn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <>
      <div>
        <div className={styles.inputName}>
          <p>Phone</p>
        </div>
        <div className={styles.divInput}>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(Number(e.target.value))}
            type="text"
          />
        </div>
      </div>

      <div>
        <div className={styles.inputName}>
          <p>Password</p>
        </div>
        <div className={styles.divInput}>
          <input
            value={Password}
            onChange={(e) => setPassword(Number(e.target.value))}
            type="text"
          />
        </div>
      </div>
    </>
  );
}
