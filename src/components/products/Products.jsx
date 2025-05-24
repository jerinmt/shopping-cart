import { Outlet } from "react-router-dom";
import styles from './products.module.css';
import Navbar from "../navbar/Navbar";
import Categories from "../categories/Categories";

function Products() {
  
    return (
      <>
      <Navbar />
      <div className={styles.container}>
        <h2>Our Products</h2>
        <Categories inProducts={true}/>
        <Outlet />
      </div>
      </>
  );
}

export default Products;