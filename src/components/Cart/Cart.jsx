import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  console.log(cart)
    let total=0;
    let shipping=0;
    let quantity=0;
    for (const product of cart){
        quantity=quantity + product.quantity;
        total=total + product.price * product.quantity;
        shipping=shipping + product.shipping;
    }
    const tax=total *0.1;
    const TaxNum=parseFloat(tax.toFixed(2))
    const grandTotal= total + shipping + TaxNum;
    return (
        <div className='cart'>
              <h2>Cart Summary</h2>
            <p>selected Items :{quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : ${TaxNum}</p>
            <h4>Grand Total : ${grandTotal}</h4>
        </div>
    );
};

export default Cart;