import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Users from './pages/Users';

import './index.css'
import UserDetail from './pages/UserDetail';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='users' element={<Users />} />
        <Route path='users/:id' element={<UserDetail />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
