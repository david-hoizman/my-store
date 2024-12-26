import React, { useRef } from 'react';

function AddProduct({ ToAddProduct }) {
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const priceRef = useRef(null);

    const getNewProductDetails = () => {
        const newProduct = {
            name: nameRef.current.value || " ",
            description: descriptionRef.current.value || " ",
            price: priceRef.current.value || " "
        };

        ToAddProduct(newProduct);
    };

    return (
        <div className='crerateProdViewContainer'>
            <p className='createProdTitle'>Details</p>
            <div className='createProdViewBox'>
                <div className='createProdViewImgBox'>
                    <img className='createProdViewImg' src={"imageSrc"} />
                </div>
                <div className='createProdViewDetailsBox'>
                    <h4 className='createProdInputs'>Name</h4>
                    <input type='text' className='singleProdViewNameText' ref={nameRef} />
                    <h4 className='createProdInputs'>Description</h4>
                    <input type='text' className='singleProdViewDescriptionText' ref={descriptionRef} />
                    <h4 className='createProdInputs'>Price</h4>
                    <input type='text' className='createProdViewPriceText' ref={priceRef} /> $
                </div>
                <button className='SaveButtonToCreate' onClick={getNewProductDetails}>
                    Save
                </button>
            </div>
        </div>
    );
}

export default AddProduct;
