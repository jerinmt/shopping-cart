import { Link } from 'react-router-dom';
import './App.css'

function App() {
  
  return (
    <>
      <p>We provide the best products at the best prices. Check out our catalogue of products from different categories. Add 'em to your cart and checkout. You will get the products in 2 days.</p>
      <h2>Categories</h2>
      <ul>
        <li><Link to="products/mensClothing">Men's Clothing</Link></li>
        <li><Link to="products/womensClothing">Women's Clothing</Link></li>
        <li><Link to="products/jewelery">Jewelery</Link></li>
        <li><Link to="products/electronics">Electronics</Link></li>
      </ul>
    </>
  );
}

export default App;
