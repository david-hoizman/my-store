import logo from './logo.svg';
import './App.css';
import StorePage from './components/storePage/StorePage';
import ProdactCard from './components/productCard/ProductCard';
import ProductsGallery from './components/productsGallery/ProductsGallery';
import products from './components/data';
import { showToast } from './components/toastNotifications/ToastNotifications';
import ToastNotifications from './components/toastNotifications/ToastNotifications';
function App() {
 
  
  return (
    <div className="App">
      
      <StorePage />
      <ToastNotifications />
    </div>
  );
}

export default App;
