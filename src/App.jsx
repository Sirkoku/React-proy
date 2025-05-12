import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import CartWidget from './components/CartWidget.jsx';
import Cart from "./pages/Cart.jsx";
import './App.css';
import { Routes,Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <NavBar/>
    </header>

    <main>
    <Routes>
    <Route path='/' element={<ItemListContainer greeting="Bienvenido a la tienda" />} />
    <Route path="./cart" element={<Cart />} />
    </Routes>
    </main>

    <footer>
      <p>Æ tienda online</p>
    </footer>
    </>
  )
}

export default App
