/* eslint-disable react/prop-types */
import styles from "./CheckOutDetails.module.css";
import CheckOutDetails from "./CheckOutDetails";
import { useContext, useState } from "react";
import AccountSignUp from "./AccountSignUp";
import AccountSignIn from "./AccountSignIn";
import { Link } from "react-router-dom";
import FooterHeader from "./FotterHeader";
import { totalItem, totalPrice } from "../context/CartReduser";
import { ShopContext } from "../context/ShopContextProvider";

export default function CheckOut() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(ShopContext);

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
                  <h4>{totalItem(cart)}</h4>
                </div>
              </div>

              <div className={styles.quantity2}>
                <div>
                  <p>Sub Total :</p>
                </div>
                <div className={styles.nairaDi}>
                  <i className="fa-solid fa-naira-sign"></i>
                  <h4>{totalPrice(cart)},000.00</h4>
                </div>
              </div>
            </div>

            <div className={styles.quantitySub}>
              <div>
                <h4>Total :</h4>
              </div>
              <div className={styles.nairaDi}>
                <i className="fa-solid fa-naira-sign"></i>
                <h5>{totalPrice(cart)},000.00</h5>
              </div>
            </div>
          </div>

          {cart?.map((cart) => (
            <>
              <div>
                <CheckOutDetails data={cart} key={cart.image} />
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

          <Link className={styles.register}>
            {!isOpen ? (
              <div className={styles.register}>
                Registration <i className="fa fa-user" aria-hidden="true"></i>
              </div>
            ) : (
              <div className={styles.register}>
                Login <i className="fa fa-user" aria-hidden="true"></i>
              </div>
            )}
          </Link>
        </div>

        <>
          <FooterHeader cart={cart} />
        </>
      </div>
    </>
  );
}
