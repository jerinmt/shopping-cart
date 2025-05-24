import { Link } from "react-router-dom";

function Categories({inProducts}) {
  if(inProducts) {
    return (
      <nav className="navbar">
        <ul>
          <li><Link to="mensClothing">Men's Clothing</Link></li>
          <li><Link to="womensClothing">Women's Clothing</Link></li>
          <li><Link to="jewelery">Jewelery</Link></li>
          <li><Link to="electronics">Electronics</Link></li>
        </ul>
      </nav>
    );  
  }
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="products/mensClothing">Men's Clothing</Link></li>
        <li><Link to="products/womensClothing">Women's Clothing</Link></li>
        <li><Link to="products/jewelery">Jewelery</Link></li>
        <li><Link to="products/electronics">Electronics</Link></li>
      </ul>
    </nav>
  );
}

export default Categories;
