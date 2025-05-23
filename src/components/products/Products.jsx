import { Outlet } from "react-router-dom";
import styles from './products.module.css';

function Products() {
  
    return (
    <div className={styles.container}>
      <h2>Our Products</h2>
      <Outlet />
    </div>
  );
}

export default Products;