import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Shared/Footer/Footer';
import Items from './Pages/Items/Items';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/LoginSystems/Login/Login';
import Register from './Pages/LoginSystems/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/items' element={<Items/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
