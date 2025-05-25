import ProductCard from '../ProductCard';
import styles from './default.module.css';
import { useOutletContext } from "react-router-dom";

function DefaultProducts({cartList }) {
    const [products] = useOutletContext();
  
  return (
    <div className={styles.container}>
        <ul className={styles.list}>
        <li className={styles.listElements}>
            {products.map((item) => (
                <div key={item.id} className={styles.cards}>
                    <ProductCard item={item} cartList={cartList}/>
                </div>
            ))}
        </li>
        </ul>
    </div>    
    );
}

export default DefaultProducts;
