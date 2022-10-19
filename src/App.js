import './style.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos!"} placeholder={"En este espacio se mostrarán los productos de la tienda"}/>
      <Footer/>
    </>
  );
}

export default App;
