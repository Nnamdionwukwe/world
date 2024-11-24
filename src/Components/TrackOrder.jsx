import FooterHeader from "./FotterHeader";
import PagesHeader from "./PagesHeader";
import styles from "./TrackOrder.module.css";

export default function TrackOrder(cart) {
  return (
    <>
      <PagesHeader />

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

          <div>
            <input type="text" placeholder="Phone Number" />
          </div>
        </div>
      </div>

      <FooterHeader cart={cart} />
    </>
  );
}
