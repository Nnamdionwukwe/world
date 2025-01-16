import { useState } from "react";
import styles from "./CheckOutDetails.module.css";

export default function AccountSignUp() {
  const [newUserName, setNewUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <div>
        <div className={styles.inputName}>
          <p>Name</p>
        </div>
        <div className={styles.divInput}>
          <input
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            type="text"
          />
        </div>
      </div>

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

      <div>
        <div className={styles.inputName}>
          <p>Confirm Password</p>
        </div>
        <div className={styles.divInput}>
          <input
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(Number(e.target.value))}
            type="text"
          />
        </div>
      </div>
    </>
  );
}
