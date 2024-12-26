import React from 'react'
import './productCard.style.css'

function ProductCard({name, price, description, imageSrc, id, onDelete, getProductIdToAction}) {
  const handleDeleteClick = (e) => {
    e.stopPropagation();  
    onDelete(id);       
  }
  return (
    <div className='cardBox' onClick={() => getProductIdToAction(id)}>
      <div className='imgBox'>
        <img className='productImg' src={imageSrc}/>
      </div>
      <div className='productDetailsBox'>
      <h4 className='productName'>{name}</h4>
      <p className='productDescription'>{description}</p>
      </div>
      <button className='deleteButton' onClick={handleDeleteClick}>
        delete
      </button>
        
    </div>
  )
}

export default ProductCard