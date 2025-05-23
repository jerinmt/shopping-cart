import { useEffect, useState } from "react";
import styles from './mensClothing.module.css';

function MensClothing() {
    const [mensClothing, setMensClothing] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setMensClothing(data.filter(item => item.category ==="men's clothing")));
    }, [mensClothing]);
  
  return (
    <div className={styles.container}>
        <ul className={styles.list}>
        <li className={styles.listElements}>
            {mensClothing.map((item) => (
                <div key={item.id} className={styles.cards}>
                    <h3 className={styles.cardHeading}>{item.title}</h3>
                    <img src={item.image} alt={item.title} className={styles.cardImages}/>
                    <p className={styles.cardDescription}>{item.description}</p>
                    <p>Price: Rs. {item.price}</p>
                </div>
            ))}
        </li>
        </ul>
    </div>    
    );
}

export default MensClothing;