import { useOutletContext } from "react-router-dom";
import styles from './mensClothing.module.css';
import ProductCard from "../ProductCard";

function MensClothing({cartList}) {
    const [products] = useOutletContext();

  return (
    <div className={styles.container}>
        <ul className={styles.list}>
        <li className={styles.listElements}>
            {products.map((item) => (
                (item.category === "men's clothing") &&
                <div key={item.id} className={styles.cards}>
                    <ProductCard item={item} cartList={cartList}/>
                </div>
            ))}
        </li>
        </ul>
    </div>    
    );
}

export default MensClothing;