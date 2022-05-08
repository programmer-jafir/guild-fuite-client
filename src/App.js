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
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';
import RequireAuth from './Pages/LoginSystems/RequireAuth/RequireAuth';
import AddItem from './Pages/AddItem/AddItem';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import MyItems from './Pages/MyItems/MyItems';
import { ToastContainer } from 'react-toastify';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/manage-inventories' element={<ManageInventories/>}/>
        <Route path='/inventory-info/:id' element={
          <RequireAuth>
            <InventoryDetails/>
          </RequireAuth>
        }/>
        <Route path='/my-items/:id' element={
          <RequireAuth>
            <MyItems/>
          </RequireAuth>
        }/>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem/>
          </RequireAuth>
        }/>
        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems/>
          </RequireAuth>
        }/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registation' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
