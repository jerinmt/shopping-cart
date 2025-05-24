import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './components/products/Products.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MensClothing from './components/men\'s/MensClothing.jsx'
import WomensClothing from './components/women\'s/WomensClothing.jsx'
import Electronics from './components/electronics/Electronics.jsx'
import Jewelery from './components/jewelery/Jewelery.jsx'
import DefaultProducts from './components/allproducts/DefaultProducts.jsx'
import Cart from './components/cart/Cart.jsx'
import ErrorPage from './components/errorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element: <Products />,
    children: [
      { index: true, element: <DefaultProducts /> },
      { path: "mensClothing", element: <MensClothing /> },
      { path: "womensClothing", element: <WomensClothing /> },
      { path: "jewelery", element: <Jewelery /> },
      { path: "electronics", element: <Electronics /> },
    ],
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <h1>Shop forever</h1>
    </header>
    <RouterProvider router={router} />
    <footer>
      <p>&copy; 2025 Shopper's Paradise. All rights reserved.</p>
    </footer>
  </StrictMode>,
)
