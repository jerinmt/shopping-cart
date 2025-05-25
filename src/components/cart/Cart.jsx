import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './cart.module.css';

function Cart({cartList}) {
  const [products] = useOutletContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = products.reduce((acc, item) => {
      return acc + (item.price * cartList[item.id - 1]);
    }, 0);
    setTotal(totalPrice);
  }, [products, cartList]);

  if(total === 0) {
    return (
      <div className={styles.cart}>
        <h2>Shopping Cart</h2>
        <p>Your cart is currently empty.</p>
      </div>
    );
  }
  return (
    <>
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      <ol>
        {products.map((item) => (
          (cartList[item.id-1] > 0) &&
          <li key={item.id}>
            {item.title} - Rs.{item.price} x {cartList[item.id-1]} = {item.price * cartList[item.id-1]}
          </li>
        ))}
      </ol>
      <hr/>
      <p>Total: Rs.{total}</p>
    </div>
    <button className={styles.btn} onClick={() => alert("Order placed successfully!")}>Place Order</button>
    </>
  );
}
export default Cart;