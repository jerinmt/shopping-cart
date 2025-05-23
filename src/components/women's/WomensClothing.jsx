import { useEffect, useState } from "react";
import styles from './womensClothing.module.css';

function WomensClothing() {
    const [clothing, setClothing] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setClothing(data.filter(item => item.category ==="women's clothing")));
    }, [clothing]);
  
  return (
    <div className={styles.container}>
        <ul className={styles.list}>
        <li className={styles.listElements}>
            {clothing.map((item) => (
                <div key={item.id} className={styles.cards}>
                    <h3 className={styles.cardHeading}>{item.title}</h3>
                    <img src={item.image} alt={item.title} className={styles.cardImages}/>
                    <p className={styles.cardDescription}>{item.description}</p>
                    <p className={styles.cardPrice}>Price: Rs. {item.price}</p>
                </div>
            ))}
        </li>
        </ul>
    </div>    
    );
}

export default WomensClothing;