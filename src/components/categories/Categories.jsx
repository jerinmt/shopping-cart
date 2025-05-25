import { Link } from "react-router-dom";
import styles from "./categories.module.css";

function Categories({inProducts}) {
  if(inProducts) {
    return (
      <nav>
        <ul className={styles.categories}>
          <li><Link to="mensClothing">Men's Clothing</Link></li>
          <li><Link to="womensClothing">Women's Clothing</Link></li>
          <li><Link to="jewelery">Jewelery</Link></li>
          <li><Link to="electronics">Electronics</Link></li>
          <li><Link to="./">All products</Link></li>
        </ul>
      </nav>
    );  
  }
  return (
    <nav>
      <ul className={styles.categories}>
        <li><Link to="products/mensClothing">Men's Clothing</Link></li>
        <li><Link to="products/womensClothing">Women's Clothing</Link></li>
        <li><Link to="products/jewelery">Jewelery</Link></li>
        <li><Link to="products/electronics">Electronics</Link></li>
        <li><Link to="products">All products</Link></li>
      </ul>
    </nav>
  );
}

export default Categories;
