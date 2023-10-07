import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import './product.css'
const Product = ( {clickHandler,product}) => {
    const{name,img,price,seller,ratings}=product;
 
    return (
        <div className='product'>
            <img src={img} alt="image" />
            <div className="product-info">
            <p className='prduct-name'>{name}</p>
            <p>price: ${price}</p>
            <p><small>seller : {seller}</small></p>
            <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={()=>clickHandler(product)} className='btn-cart'>
                <p className='btn-text'>add to cart</p>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;