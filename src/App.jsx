import { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import Cart from "./pages/Cart";
import './App.css';
import productos from "./data/products"
import { Routes,Route} from 'react-router-dom';

function App() {
  const [carrito, setcarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((item) =>item.id === producto.id);

      if(existe){
        setcarrito(
          carrito.map((item) =>
          item.id === producto.id 
          ?{ ...item,cantidad: item.cantidad+1}
          :item
      ) 
      );
      }else{
        setcarrito([...carrito,{...producto,cantidad:1}]);
      }
    };

  return (
    <>
    <header>
      <NavBar/>
    </header>

    <main>
    <Routes>
    <Route path="/" 
    element={
    <ItemListContainer 
    greeting="Bienvenido a la tienda"
    onAdd={agregarAlCarrito}
    />}
    />

    <Route path="/cart" element={<Cart carrito={carrito}/>} />
    </Routes>
    </main>

    <footer>
      <p>Æ tienda online</p>
    </footer>
    </>
  );
}

export default App
