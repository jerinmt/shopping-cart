import { Outlet } from "react-router-dom";
import styles from './products.module.css';
import Navbar from "../navbar/Navbar";
import Categories from "../categories/Categories";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
      
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data));
    }, []);
  
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>See Products</h2>
        <Categories inProducts={true}/>
        <Outlet context={[products]}/>
      </div>
    </>
  );
}

export default Products;