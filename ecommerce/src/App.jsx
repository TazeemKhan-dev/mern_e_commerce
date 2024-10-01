import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Shop from "./pages/Shop";
import ScrollToTop from "./components/ScrollTop";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="products/:category" element={<ProductList />} />
        <Route
          path="sign-in"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shop" element={<Shop />} />
        <Route path="success" element={<Success />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
