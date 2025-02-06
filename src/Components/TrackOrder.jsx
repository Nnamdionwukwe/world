import { useState } from "react";
import FooterHeader from "./FotterHeader";
import styles from "./TrackOrder.module.css";
import HeaderHeader from "./HeaderHeader";

export default function TrackOrder(cart) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [orderId, setOrderId] = useState("");
  return (
    <>
      <HeaderHeader />

      <div className={styles.main}>
        <div className={styles.mainSub}>
          <div className={styles.mainTrack}>
            <p>Track order</p>
          </div>

          <div className={styles.phoneDiv}>
            <p>
              Phone Number <span>*</span>
            </p>
          </div>

          <div className={styles.phoneNumberDiv}>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              placeholder="Phone Number"
            />
          </div>

          <div className={styles.orderDiv}>
            <p>Order ID</p>
          </div>

          <div className={styles.phoneNumberDiv}>
            <input
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              type="text"
              placeholder="Order ID"
            />
          </div>

          <div className={styles.checkButton}>
            <button>Check</button>
          </div>
        </div>
      </div>

      <FooterHeader cart={cart} />
    </>
  );
}
