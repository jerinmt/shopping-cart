import { useOutletContext } from "react-router-dom";
import styles from './jewelery.module.css';
import ProductCard from "../productcard/ProductCard";

function Jewelery({cartList}) {
    const [products] = useOutletContext();
  
  return (
    <div className={styles.container}>
        <ul className={styles.list}>
            {products.map((item) => (
                (item.category === "jewelery") &&
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

export default Jewelery;
