import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './sharedData.jsx'

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <h1>Shop forever</h1>
    </header>
    <RouterProvider router={router} />
    <footer>
      <p>&copy; 2025 Shopper's Paradise. All rights reserved.</p>
    </footer>
  </StrictMode>
);
