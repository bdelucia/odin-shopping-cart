import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './components/context/CartContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
