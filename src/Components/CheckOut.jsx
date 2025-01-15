/* eslint-disable react/prop-types */
import styles from "./CheckOutDetails.module.css";
import CheckOutDetails from "./CheckOutDetails";

export default function CheckOut({ cart, handleDeleteItem, handleBillSubmit }) {
  // console.log(cartTotal);
  return (
    <>
      <div className={styles.quantityMain}>
        <div className={styles.item}>
          <div>
            <div>
              <div className={styles.quantity}>
                <div>
                  <p>qty :</p>
                </div>
                <div>
                  <h4>2</h4>
                </div>
              </div>

              <div className={styles.quantity2}>
                <div>
                  <p>Sub Total :</p>
                </div>
                <div>
                  <h4># 17,000.00</h4>
                </div>
              </div>
            </div>

            <div className={styles.quantitySub}>
              <div>
                <h4>Total :</h4>
              </div>
              <div>
                <p># 17,000.00</p>
              </div>
            </div>
          </div>

          {cart?.map((cart) => (
            <>
              <div>
                <CheckOutDetails
                  cart={cart}
                  key={cart.image}
                  handleDeleteItem={handleDeleteItem}
                  handleBillSubmit={handleBillSubmit}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
