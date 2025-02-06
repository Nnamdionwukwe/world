import styles from "./Header.module.css";
import HeaderHeader from "./HeaderHeader";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.lazeDiv}>
          <div className={styles.logo}>
            <img src="https://menu.stanfordelaze.ng/uploads/thumb/6ca252f775ee8306d1981e6ee2d0d3c7.png" />
          </div>

          <div className={styles.lazeMain}>
            <div>
              <h1 className={styles.laze}>FurstClass Menu</h1>

              <div className={styles.home}>
                <div className={styles.homeDiv}>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <h3>27 Independence Avenue,</h3>
                </div>

                <h3 className={styles.indepen}> Independence Layout </h3>
              </div>

              <div className={styles.number}>
                <div className={styles.numberDiv1}>
                  <i className="fa fa-phone" aria-hidden="true"></i>

                  <h3>+234 8037748573</h3>
                </div>

                <div className={styles.numberDiv2}>
                  <i className="fa fa-envelope" aria-hidden="true"></i>

                  <h3>furstclass@gmail.com</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeaderHeader />
    </>
  );
}
