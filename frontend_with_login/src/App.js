import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Pagenotfound from './pages/Pagenotfound';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import SignUp from './pages/SignUp';
import Resetpassword from './pages/Resetpassword';

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
      </Routes>
    </>
  );
}

export default App;
