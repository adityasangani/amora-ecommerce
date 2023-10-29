import { Counter } from './features/counter/Counter';
import Home from './pages/Home';
import './App.css';
import ProductList from './features/product/components/ProductList';
import LoginPage from './pages/LoginPage';
import Signup from './features/auth/components/Signup';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignupPage from './pages/SignupPage';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetail from './features/product/components/ProductDetail';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/home",
    element:<Home></Home>,
  },
  {
    path: "/checkout",
    element:<Checkout></Checkout>,
  },
  {
    path: "/product-detail",
    element:<ProductDetailPage></ProductDetailPage>,
  },
]);

  
  function App() {
    return (
      <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
