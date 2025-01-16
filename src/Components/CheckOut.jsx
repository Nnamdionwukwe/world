/* eslint-disable react/prop-types */
import styles from "./CheckOutDetails.module.css";
import CheckOutDetails from "./CheckOutDetails";
import { useState } from "react";
import AccountSignUp from "./AccountSignUp";
import AccountSignIn from "./AccountSignIn";
import { Link, NavLink } from "react-router-dom";
import FooterHeader from "./FotterHeader";

export default function CheckOut({ cart, handleDeleteItem, handleBillSubmit }) {
  const [isOpen, setIsOpen] = useState(false);

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

        <div className={styles.subMainOne}>
          <div className={styles.subMain}>
            <div
              className={isOpen ? styles.subMainSignUp : styles.subMainSignUp1}
              onClick={() => setIsOpen(false)}
            >
              <i className="fa fa-user" aria-hidden="true"></i>
              <p>New Registration</p>
            </div>

            <div
              className={!isOpen ? styles.subMainSignIn : styles.subMainSignIn2}
              onClick={() => setIsOpen(true)}
            >
              <i className="fa fa-user" aria-hidden="true"></i>
              <p>Already have an account</p>
            </div>
          </div>

          <div>
            {!isOpen ? (
              <div className={styles.signUp}>
                <AccountSignUp />
              </div>
            ) : (
              <div className={styles.signIn}>
                <AccountSignIn />
              </div>
            )}
          </div>

          <Link to="/accountsignin">
            <button>Sign In</button>
          </Link>
        </div>

        <>
          <FooterHeader cart={cart} />
        </>
      </div>
    </>
  );
}
