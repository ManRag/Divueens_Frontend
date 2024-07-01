import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBrands from './components/Home/TopBrands/TopBrands';
import Banner from './components/Home/Banner/Banner';
import FooterBlock from './components/Home/Footer/Footer';
import Home from './components/Home/Header/Home';
import BestSeller from './components/Home/BestSeller/BestSeller';
import ExclusiveDiscount from './components/Home/Exclusive_discount/ExclusiveDiscount';
import ShopByCategory from './components/Home/ShopByCategory/ShopByCategory';
import Subscription from './components/Home/Subscription/Subscription';
import SignUpPage from './components/Authenticate/SignUp';
import LoginPage from './components/Authenticate/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the home page */}
        <Route
          path="/"
          element={
            <>
              {/* Components for the home page */}
              <Home />
              <div className="app">
                <Banner />
                <BestSeller />
                <TopBrands />
                <ExclusiveDiscount />
                <ShopByCategory />
                <Subscription />
              </div>
              {/* Footer for the home page */}
              <FooterBlock />
            </>
          }
        />
        <Route
          path="/login"
          element={<><LoginPage /></>}
        />
        <Route
          path="/signup"
          element={<><SignUpPage /></>}
        />
        {/* Add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
