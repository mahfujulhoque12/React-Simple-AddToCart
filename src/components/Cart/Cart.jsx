import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div>
              <h4>this is card</h4>
            <p>selected Items :{cart.length}</p>
        </div>
    );
};

export default Cart;