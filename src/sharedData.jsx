import App from './App.jsx'
import Products from './components/products/Products.jsx'
import MensClothing from './components/men\'s/MensClothing.jsx'
import WomensClothing from './components/women\'s/WomensClothing.jsx'
import Electronics from './components/electronics/Electronics.jsx'
import Jewelery from './components/jewelery/Jewelery.jsx'
import DefaultProducts from './components/allproducts/DefaultProducts.jsx'
import Cart from './components/cart/Cart.jsx'
import ErrorPage from './components/errorPage/ErrorPage.jsx'

const cartList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element: <Products />,
    children: [
      { index: true, element: <DefaultProducts cartList={cartList}/> },
      { path: "mensClothing", element: <MensClothing cartList={cartList}/> },
      { path: "womensClothing", element: <WomensClothing cartList={cartList}/> },
      { path: "jewelery", element: <Jewelery cartList={cartList}/> },
      { path: "electronics", element: <Electronics cartList={cartList}/> },
      { path: "cart", element: <Cart cartList={cartList}/> },
    ],
  },
];

export default routes;
