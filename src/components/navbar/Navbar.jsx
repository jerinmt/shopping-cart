import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Our Products</Link></li>
        <li><Link to="/products/cart">Your Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
