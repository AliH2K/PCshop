import Home from './components/home';
import Shop from './components/shop';
import { CartProvider } from './components/cartContext';

function App() {
  return (
    <CartProvider>
      <Home />
      <Shop />
    </CartProvider>
  );
}

export default App;
