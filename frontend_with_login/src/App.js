import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Pagenotfound from './pages/Pagenotfound';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import SignUp from './pages/SignUp';
import Resetpassword from './pages/Resetpassword';
import SingleProduct from './pages/SingleProduct';
import OurStore from './pages/OurStore';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ourstore/search/:searchTerm" element={<OurStore />} />
        <Route path="/ourstore/tag/:tag" element={<OurStore />} />
        <Route path="/ourstore" element={<OurStore />} />
        <Route path="/ourstore/:id" element={<SingleProduct />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/:id" element={<SingleProduct/>} /> */}
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
