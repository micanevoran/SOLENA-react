import './style.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Form from './components/Form'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/CartContext';

function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>  
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
            <Route path='/detail/:prodId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Form/>}/>
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;
