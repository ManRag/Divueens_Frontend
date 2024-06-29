import './App.css';
import BestSeller from './components/BestSeller/BestSeller';
import TopBrands from './components/TopBrands/TopBrands';
import ExclusiveDiscount from './components/Exclusive_discount/ExclusiveDiscount';
import ShopByCategory from './components/ShopByCategory/ShopByCategory';
import Subscription from './components/Subscription/Subscription';
import Banner from './components/Banner/Banner';
import FooterBlock from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Header/Home';

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
              {/* <Home /> */}
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
        {/* Add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
