import Navbar from "../navbar/Navbar";

function Cart() {
  return (
    <>
    <Navbar />
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Your cart is currently empty.</p>
    </div>
    </>
  );
}
export default Cart;