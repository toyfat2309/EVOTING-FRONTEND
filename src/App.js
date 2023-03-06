import './App.css';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import Login from './features/Login/Login';
import SignUp from './features/signup/SignUp';
import ResponsiveDrawer from './features/userDashboard/UserDashboard';

function App() {
  return (
   <>
   <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/dashboard' element={<ResponsiveDrawer/>} />
   </Routes>
   </>
  );
}

export default App;
