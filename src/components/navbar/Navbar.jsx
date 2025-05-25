import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Our Products</Link></li>
        <li><Link to="/products/cart">Your Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
