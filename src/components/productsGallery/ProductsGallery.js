// import React from 'react'
// import './productsGallery.style.css'
// import ProductCard from '../productCard/ProductCard'

// function ProductsGallery({productsList, onDelete, getProductIdToAction}) {
   
//   return (
//     <div className='galleryBox'>
//         {productsList.map((product) => {
//             return <ProductCard 
//             id={product.id} 
//             name={product.name} 
//             price={product.price} 
//             description={product.description} 
//             imageSrc={product.imageSrc} 
//             onDelete={onDelete} 
//             getProductIdToAction={getProductIdToAction}/>
//         })}
//     </div>
//   )
// }

// export default ProductsGallery
import React from 'react'
import './productsGallery.style.css'
import ProductCard from '../productCard/ProductCard'

function ProductsGallery({productsList, onDelete, getProductIdToAction , pageNumber}) {

  const itemsPerPage = 4;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = productsList.slice(startIndex, endIndex);
   
  return (
    <div className='galleryBox'>
        {currentPageItems.map((product) => {
            return <ProductCard 
            id={product.id} 
            name={product.name} 
            price={product.price} 
            description={product.description} 
            imageSrc={product.imageSrc} 
            onDelete={onDelete} 
            getProductIdToAction={getProductIdToAction}/>
        })}
    </div>
  )
}

export default ProductsGallery