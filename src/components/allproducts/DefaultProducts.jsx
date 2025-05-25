import ProductCard from "../productcard/ProductCard";
import styles from './default.module.css';
import { useOutletContext } from "react-router-dom";

function DefaultProducts({cartList }) {
    const [products] = useOutletContext();
  
  return (
    <div className={styles.container}>
        <ul className={styles.list}>
            {products.map((item) => (
                <li className={styles.listElements}>
                <div key={item.id} className={styles.cards}>
                    <ProductCard item={item} cartList={cartList}/>
                </div>
                </li>
            ))}
        </ul>
    </div>    
    );
}

export default DefaultProducts;
