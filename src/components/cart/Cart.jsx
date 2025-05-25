import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart({cartList}) {
  const [products] = useOutletContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = products.reduce((acc, item) => {
      return acc + (item.price * cartList[item.id - 1]);
    }, 0);
    setTotal(totalPrice);
  }, [products, cartList]);

  return (
    <>
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Your cart is currently empty.</p>
      <ol>
        {products.map((item) => (
          (cartList[item.id-1] > 0) &&
          <li key={item.id}>
            {item.title} - Rs.{item.price} x {cartList[item.id-1]} = {item.price * cartList[item.id-1]}
          </li>
        ))}
      </ol>
      <p>Total: Rs.{total}</p>
    </div>
    </>
  );
}
export default Cart;