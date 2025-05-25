import { useOutletContext } from "react-router-dom";
import styles from './womensClothing.module.css';
import ProductCard from "../ProductCard";

function WomensClothing({cartList}) {
    const [products] = useOutletContext();
  
  return (
    <div className={styles.container}>
        <ul className={styles.list}>
        <li className={styles.listElements}>
            {products.map((item) => (
                (item.category === "women's clothing") &&
                <div key={item.id} className={styles.cards}>
                    <ProductCard item={item} cartList={cartList}/>
                </div>
            ))}
        </li>
        </ul>
    </div>    
    );
}

export default WomensClothing;