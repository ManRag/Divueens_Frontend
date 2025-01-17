import { Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer/Footer";
import SignUpPage from "./components/Authenticate/SignUp";
import LoginPage from "./components/Authenticate/login";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import TeamSection from "./pages/TeamSection";
import DivueensCSR from "./pages/DivueensCSR";
import BlogHome from "./pages/Blog";
import DivCoins from "./pages/DivCoins";

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
        
        {/* Our Team page */}
        <Route path="/ourteam" element={<TeamSection />} />

        {/* CSR page */}
        <Route path="/CSR" element={<DivueensCSR />} />

        {/* Div Coins page */}
        <Route path="/coins" element={<DivCoins />} />

        {/* Blog page */}
        <Route path="/blogs" element={<BlogHome />} />
      </Routes>
      <Footer />
    </>
    // profile page, wishlist, Settings ---(designs ready)
    // 
  );
}

export default App;
