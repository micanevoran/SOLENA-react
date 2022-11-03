import './style.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>  
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
          <Route path='/detail/:prodId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
