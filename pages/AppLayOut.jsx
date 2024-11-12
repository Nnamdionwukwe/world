import Map from "../components/Map";
import Sidebar from "../components/SideBar";
import styles from "./AppLayOut.module.css";

export default function AppLayOut() {
  return (
    <div className={styles.app}>
      <Sidebar />

      <Map />
    </div>
  );
}
