import React, { useEffect, useState } from 'react';
import './shop.css'
import Product from '../product/product';
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
    const clickHandler=(product)=>{
        console.log(product)
        const newCart=[...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
        
              {
                products.map(product=> <Product
                     key={product.id}
                     product={product}
                     clickHandler={clickHandler}
                ></Product>)
              }
            </div>
            <div className="products-card">
                    <h4>this is card</h4>
                    <p>selected Items :{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;