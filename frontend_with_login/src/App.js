import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Pagenotfound from './pages/Pagenotfound';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import SignUp from './pages/SignUp';
import Resetpassword from './pages/Resetpassword';
import Shop from './pages/shop';
import Myshop from './pages/Myshop';
import AboutUs from './pages/aboutUs';
import Cart from './pages/cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Myshop" element={<Myshop />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path ="/cart" element={<Cart />} />       
        
      </Routes>
    </>
  );
}

export default App;
