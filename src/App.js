import './App.css';
import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';
import LoginPage from './components/Login.js';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RoutesContainer from './components/RoutesContainer';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div class="header-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/listing">Products</Link></li>
          <li><Link to="/listing/mobile">Mobile</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        </div>
        {/* <ProductListingPage /> */}
        {/* <CartPage />*/}
        {/* <LoginPage />*/}

      </div>
      <RoutesContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
