import React from 'react'
import TopNav from '../topNav/TopNav'
import './storePage.style.css'
import ProductsGallery from '../productsGallery/ProductsGallery';
import products from '../data';
import SingleProdView from '../singleProdView/SingleProdView';
import AddProduct from '../addProduct/AddProduct';
import { showToast } from '../toastNotifications/ToastNotifications';
import ToastNotifications from '../toastNotifications/ToastNotifications';

function StorePage() {
  const [productsList, setProductsList] = React.useState(products);
  const [productIdToAction, setProductIdToAction] = React.useState(null);
  const [inaddProductProcess, setInaddProductProcess] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [prevButtomMode, setPrevButtomMode] = React.useState(false);
  const [nextButtomMode, setNextButtomMode] = React.useState(true);

  const handleDeleteProduct = (productId) => {
    const newProductsList = productsList.filter((product) => product.id !== productId);
    setProductsList(newProductsList);
    setProductIdToAction(null);
  };

  
  const getProductIdToAction = (productId) => {
    setProductIdToAction(productsList.find((product) => product.id === productId));
  };

  
  const updateProduct = (productId, updatedProduct) => {
    const newProductsList = productsList.map((product) => {
      if (product.id === productId) {
        return {
          id: product.id, 
          name: updatedProduct.name || product.name,
          description: updatedProduct.description || product.description,
          price: updatedProduct.price || product.price,
          imageSrc: updatedProduct.imageSrc || product.imageSrc
      };
      }
      
      return product;
    });
    setProductsList(newProductsList);
  };
  const ToAddProduct = (newProduct) => {
    newProduct.id = productsList.length + 1;
    newProduct.creationDate = new Date();

    // showToast({
    //   type: 'success',
    //   title: 'הצלחה!',
    //   message: 'הפעולה התבצעה בהצלחה.',
    //   autoClose: 5000, // ייסגר אוטומטית אחרי 5 שניות
    //   width: 400,
    //   height: 100,
    // });

    setInaddProductProcess(false);
    setProductsList([...productsList, newProduct]);
    setProductIdToAction(null);}
    

    
    const nextPage = () => {
      if (pageNumber < productsList.length / 4) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
        setPrevButtomMode(true)
        
      }else{
        console.log("vdfe");
        
        setNextButtomMode(false)
      }
    };
    

    const prevPage = () => {
      if (pageNumber > 1) {
        setPageNumber(prevPageNumber => prevPageNumber - 1);
        setNextButtomMode(true)
      }else{
        setPrevButtomMode(false)
      }
    };
    
  return (
    <div className='container'>
        <TopNav/>
        <div className='optionsMiniBar'>
        {!inaddProductProcess && (
  <button className='addButton' onClick={() => setInaddProductProcess(true)}>
    + Add
  </button>
)}

        </div>
        <div className='productsGallery'>
          <div className='productsListGallery'>
            <ProductsGallery productsList={productsList} onDelete={handleDeleteProduct} getProductIdToAction={getProductIdToAction} pageNumber={pageNumber}/>
          </div>
          <div className='singleProductView'>
            {!inaddProductProcess && productIdToAction && <SingleProdView productIdToAction={productIdToAction} updateProduct={updateProduct}/>}
            {inaddProductProcess && <AddProduct ToAddProduct={ToAddProduct} finishAddProductProcess/>}

          </div>
          
        </div>  
        <div className='prevOrNextPageContainer'>
    {prevButtomMode ? (
        <button className='prevOrNextPageButton' onClick={prevPage}>Prev Page</button>
    ) : (
        <div className="placeholder"></div>
    )}
    {nextButtomMode ? (
        <button className='prevOrNextPageButton' onClick={nextPage}>Next Page</button>
    ) : (
        <div className="placeholder"></div>
    )}
</div>

    </div>
  )
}

export default StorePage