import React from 'react'
import './singleProdView.style.css'

function SingleProdView({productIdToAction, updateProduct}) {
    const getUpdatedDeatials = () => {
        let a = {
            name: document.querySelector('.singleProdViewNameText').value,
            description: document.querySelector('.singleProdViewDescriptionText').value,
            price: document.querySelector('.singleProdViewPriceText').value
        }
        console.log(a);
        updateProduct(productIdToAction.id, a)
        
        
        
        // updateProduct(productIdToAction.id, updateProduct)


        
    }
  return (
    <div className='singleProdViewContainer'>
        <p className='singleProdTitle'>{productIdToAction.name} deatails</p>
        <div className='singleProdViewBox'>
            <div className='singleProdViewImgBox'>
                <img className='singleProdViewImg' src={productIdToAction.imageSrc}/>
            </div>
            <div className='singleProdViewDetailsBox'>
           <h4 className='singleProdInputs'>name</h4>
            <input type='text' className='singleProdViewNameText' placeholder={productIdToAction.name}/>
           <h4 className='singleProdInputs'>Description</h4>
            <input type='text' className='singleProdViewDescriptionText' placeholder={productIdToAction.description}/>
           <h4 className='singleProdInputs'>price</h4>
            <input type='text' className='singleProdViewPriceText' placeholder={productIdToAction.price}/> $

                
                {/* <p className='singleProdViewDescription'>{productIdToAction.description}</p> */}
            </div>
            <button className='SaveButton' onClick={getUpdatedDeatials}>
            {/* <button className='SaveButton' onClick={() => updateProduct(productIdToAction.id, updateProduct)}> */}
                save
            </button>

        
        </div>
        
    </div>
  )
}

export default SingleProdView