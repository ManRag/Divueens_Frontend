import { Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer/Footer";
import SignUpPage from "./components/Authenticate/SignUp";
import LoginPage from "./components/Authenticate/login";
import Home from "./pages/Home";
import ProductList from "./components/Home/ProductList/ProductList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Product - List */}
        <Route path="/products" element={<ProductList />} />

        {/* Login page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Signup page */}
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
