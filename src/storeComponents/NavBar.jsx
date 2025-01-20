import { Link } from "react-router-dom";
import "./NavBAr.css";

export const NavBar = () => {
  return (
    <div>
      <div className="header">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <button>Cart</button>
        </Link>
      </div>
    </div>
  );
};
