import Categories from './components/categories/Categories';
import Navbar from './components/navbar/Navbar';

function App() {
  
  return (
    <>
    <Navbar />
    <div className='contents'>
      <p>We provide the best products at the best prices. Check out our catalogue of products from different categories. Add 'em to your cart and checkout. You will get the products in 2 days.</p>
      <p>We strive to provide highest quality products where each of our products go through rigorous checks for quality.</p>
      <p>Feel free to contact us at shoppersparadise@example.com</p>  
      <h2>Categories</h2>
      <Categories />
    </div>
    </>
  );
}

export default App;
